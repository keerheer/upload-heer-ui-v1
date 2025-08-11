<template>
  <!-- 
    Select选择器组件 - 支持单选、搜索、远程搜索、清空等功能
    主要特性：
    1. 支持基础单选功能
    2. 支持本地搜索过滤
    3. 支持远程搜索
    4. 支持清空选择
    5. 支持禁用状态
    6. 支持自定义过滤方法
    7. 内置防抖机制优化搜索性能
  -->
  <div 
    class="he-select"
    :class="{'is-disabled': disabled}"
    @click="toggleDropdown"       
    @mouseenter="mouseHover = true"  
    @mouseleave="mouseHover = false"  
    v-click-outside="closeDropdown"  
  >
  <!--点击切换下拉框显示状态 
  鼠标进入，用于控制清空图标显示
  鼠标离开
  点击外部区域关闭下拉框 -->
    <!-- 输入框区域 - 显示选中值或搜索输入 -->
    <div class="he-select__input">
      <input
        ref="inputRef"  
        class="he-select__inner"
        :class="{'is-disabled': disabled}"
        :placeholder="currentPlaceholder"  
        :value="displayValue"  
        :readonly="!filterable"  
        :disabled="disabled"  
        @input="handleInput"  
        @focus="handleFocus"  
        @blur="handleBlur"  
      />
      <!-- 动态占位符，搜索时显示选中项标签 -->
       <!-- 显示值：搜索时显示搜索内容，否则显示选中项标签 -->
        <!-- 非搜索模式时只读 -->
         <!-- 非搜索模式时只读 -->
          <!-- 禁用状态 -->
           <!-- 输入事件，触发搜索 -->
            <!-- 获得焦点事件 -->
             <!-- 失去焦点事件 -->

      <!-- 后缀图标区域 - 显示清空图标或下拉箭头 -->
      <span class="he-select__suffix">
        <!-- 清空图标 - 仅在可清空、有选中值、鼠标悬停且未禁用时显示 -->
         <!-- 阻止事件冒泡，避免触发下拉框切换 -->
        <i 
          v-if="showClearIcon" 
          class="he-icon-a-close he-select__clear"
          @click.stop="handleClear"  
        ></i>
        <!-- 下拉箭头 - 默认显示，下拉框展开时旋转180度 -->
         <!-- 下拉框展开时箭头反转 -->
        <i 
          v-else
          class="he-select__arrow"
          :class="{'is-reverse': dropdownVisible}"  
        >▼</i>
      </span>
    </div>

    <!-- 下拉选项列表 - 带过渡动画的下拉框 -->
     <!-- 根据状态控制显示隐藏 -->
     <!-- ref="dropdownRef"  下拉框引用 -->
    <transition name="he-select-dropdown">
      <div 
        v-show="dropdownVisible"  
        class="he-select__dropdown"
        ref="dropdownRef"  
      >
        <!-- 加载状态 - 远程搜索时显示 -->
        <div v-if="loading" class="he-select__loading">
          <span>加载中...</span>
        </div>
        <!-- 无数据状态 - 过滤后无选项时显示 -->
        <div v-else-if="filteredOptions.length === 0" class="he-select__empty">
          <span>{{ emptyText }}</span>
        </div>
        <!-- 选项列表 - 显示过滤后的选项 -->
         <!-- :key="option.value || index"  优先使用value作为key -->
         <!-- 'is-selected': option.value === modelValue,  选中状态样式 -->
         <!-- 'is-disabled': option.disabled  禁用状态样式 -->
         <!-- @click="handleOptionClick(option)"  点击选择选项 -->
        <ul v-else class="he-select__options">
          <li
            v-for="(option, index) in filteredOptions"
            :key="option.value || index"  
            class="he-select__option"
            :class="{
              'is-selected': option.value === modelValue,  
              'is-disabled': option.disabled  
            }"
            @click="handleOptionClick(option)"  
          >
            <span>{{ option.label }}</span>  <!-- 选项标签 -->
            <!-- 选中状态图标 - 仅在选中时显示 -->
            <i v-if="option.value === modelValue" class="he-select__check">✓</i>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
/**
 * Select选择器组件
 * 
 * 功能特性：
 * 1. 基础单选功能 - 支持从选项列表中选择一个值
 * 2. 搜索过滤功能 - 支持本地搜索和远程搜索
 * 3. 清空功能 - 支持一键清空选中值
 * 4. 禁用状态 - 支持整体禁用和单个选项禁用
 * 5. 自定义过滤 - 支持自定义过滤逻辑
 * 6. 防抖优化 - 内置防抖机制优化搜索性能
 * 7. 无障碍访问 - 支持键盘操作和屏幕阅读器
 */
export default {
  name: 'he-select',
  props: {
    /**
     * v-model绑定的值 - 当前选中选项的value值
     * 支持字符串和数字类型
     */
    modelValue: {
      type: [String, Number],
      default: ''
    },
    /**
     * 选项数据数组
     * 格式：[{label: '显示文本', value: '选项值', disabled: false}, ...]
     * label: 显示给用户的文本
     * value: 选项的实际值，用于v-model绑定
     * disabled: 是否禁用该选项（可选）
     */
    options: {
      type: Array,
      default: () => []
    },
    /**
     * 占位符文本 - 未选择时显示的提示文字
     */
    placeholder: {
      type: String,
      default: '请选择'
    },
    /**
     * 是否禁用整个选择器
     * 禁用后无法点击、搜索、选择
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 是否可清空 - 是否显示清空按钮
     * 启用后在鼠标悬停且有选中值时显示清空图标
     */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * 是否可搜索 - 是否支持输入搜索过滤选项
     * 启用后输入框变为可编辑状态，支持输入关键词过滤
     */
    filterable: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义过滤方法
     * 函数签名：(searchValue: string) => Array
     * 参数：searchValue - 用户输入的搜索关键词
     * 返回：过滤后的选项数组
     * 优先级高于默认过滤逻辑
     */
    filterMethod: {
      type: Function,
      default: null
    },
    /**
     * 是否远程搜索 - 是否通过远程接口搜索数据
     * 启用后需配合remoteMethod使用
     */
    remote: {
      type: Boolean,
      default: false
    },
    /**
     * 远程搜索方法
     * 函数签名：(searchValue: string) => Promise<Array>
     * 参数：searchValue - 用户输入的搜索关键词
     * 返回：Promise，resolve时返回搜索结果数组
     * 仅在remote为true时生效
     */
    remoteMethod: {
      type: Function,
      default: null
    },
    /**
     * 无数据时显示的文字
     * 当过滤后没有匹配的选项时显示
     */
    emptyText: {
      type: String,
      default: '无数据'
    },
    /**
     * 防抖延迟时间(毫秒)
     * 用户输入搜索关键词后，延迟指定时间再执行搜索
     * 避免频繁触发搜索，提升性能
     */
    debounceDelay: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      /**
       * 下拉框是否可见
       * 控制选项列表的显示和隐藏
       */
      dropdownVisible: false,
      /**
       * 鼠标是否悬停在组件上
       * 用于控制清空图标的显示时机
       */
      mouseHover: false,
      /**
       * 当前输入的搜索值
       * 在可搜索模式下，存储用户输入的关键词
       */
      searchValue: '',
      /**
       * 是否正在加载数据
       * 远程搜索时显示加载状态
       */
      loading: false,
      /**
       * 过滤后的选项数组
       * 根据搜索条件过滤后的选项列表
       */
      filteredOptions: [],
      /**
       * 防抖定时器ID
       * 用于实现搜索防抖功能
       */
      debounceTimer: null,
      /**
       * 输入框是否获得焦点
       * 用于控制焦点相关的样式和行为
       */
      focused: false
    }
  },
  computed: {
    /**
     * 当前选中的选项对象
     * 根据modelValue从options中查找对应的选项
     * returns {Object|null} 选中的选项对象，未找到时返回null
     */
    selectedOption() {
      return this.options.find(option => option.value === this.modelValue) || null
    },
    /**
     * 输入框显示的值
     * 在搜索模式下显示搜索内容，否则显示选中项的标签
     * returns {string} 要在输入框中显示的文本
     */
    displayValue() {
      if (this.filterable && this.dropdownVisible) {
        // 搜索模式且下拉框展开时，显示搜索内容
        return this.searchValue
      }
      // 否则显示选中项的标签
      return this.selectedOption ? this.selectedOption.label : ''
    },
    /**
     * 当前占位符文本
     * 在搜索模式下动态调整占位符内容
     * returns {string} 占位符文本
     */
    currentPlaceholder() {
      if (this.filterable && this.selectedOption && this.dropdownVisible) {
        // 搜索模式下，如果有选中项且下拉框展开，显示选中项标签作为占位符
        return this.selectedOption.label
      }
      // 否则显示默认占位符
      return this.placeholder
    },
    /**
     * 是否显示清空图标
     * 需要同时满足：可清空、鼠标悬停、有选中值、未禁用
     * returns {boolean} 是否显示清空图标
     */
    showClearIcon() {
      return this.clearable && 
             this.mouseHover && 
             this.selectedOption && 
             !this.disabled
    }
  },
  watch: {
    // 监听选项变化
    options: {
      handler(newOptions) {
        this.filteredOptions = [...newOptions]
      },
      immediate: true
    },
    // 监听下拉框显示状态
    dropdownVisible(visible) {
      if (visible) {
        this.handleDropdownShow()
      } else {
        this.handleDropdownHide()
      }
      this.$emit('visible-change', visible)
    }
  },
  mounted() {
    // 初始化过滤选项
    this.filteredOptions = [...this.options]
  },
  methods: {
    /**
     * 切换下拉框显示状态
     * 点击选择器时调用，在禁用状态下不执行任何操作
     */
    toggleDropdown() {
      if (this.disabled) return
      this.dropdownVisible = !this.dropdownVisible
    },
    /**
     * 关闭下拉框
     * 点击外部区域时调用
     */
    closeDropdown() {
      this.dropdownVisible = false
    },
    /**
     * 处理下拉框显示时的逻辑
     * 在可搜索模式下，清空搜索值、聚焦输入框并执行初始搜索
     */
    handleDropdownShow() {
      if (this.filterable) {
        // 清空之前的搜索内容
        this.searchValue = ''
        // 下一个tick聚焦输入框，确保DOM已更新
        this.$nextTick(() => {
          this.$refs.inputRef && this.$refs.inputRef.focus()
        })
        // 执行初始搜索（空字符串），显示所有选项
        this.handleSearch('')
      }
    },
    /**
     * 处理下拉框隐藏时的逻辑
     * 在可搜索模式下，清空搜索值以恢复正常显示
     */
    handleDropdownHide() {
      if (this.filterable) {
        // 清空搜索值，恢复显示选中项的标签
        this.searchValue = ''
      }
    },
    /**
     * 处理输入框输入事件
     * 仅在可搜索模式下生效，更新搜索值并触发防抖搜索
     * param {Event} event - 输入事件对象
     */
    handleInput(event) {
      if (!this.filterable) return
      
      const value = event.target.value
      this.searchValue = value
      
      // 使用防抖机制处理搜索，避免频繁触发
      this.debounceSearch(value)
    },
    /**
     * 防抖搜索方法 - 核心防抖实现
     * 在用户停止输入指定时间后才执行搜索，提升性能
     * param {string} value - 搜索关键词
     */
    debounceSearch(value) {
      // 清除之前的定时器，重置防抖计时
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer)
      }
      
      // 设置新的定时器，延迟执行搜索
      this.debounceTimer = setTimeout(() => {
        this.handleSearch(value)
      }, this.debounceDelay)
    },
    /**
     * 处理搜索逻辑 - 支持远程搜索、自定义过滤、默认过滤三种模式
     * param {string} value - 搜索关键词
     */
    async handleSearch(value) {
      if (this.remote && this.remoteMethod) {
        // 远程搜索模式：调用远程接口获取数据
        this.loading = true
        try {
          const result = await this.remoteMethod(value)
          this.filteredOptions = Array.isArray(result) ? result : []
        } catch (error) {
          console.error('远程搜索失败:', error)
          this.filteredOptions = []
        } finally {
          this.loading = false
        }
      } else if (this.filterMethod) {
        // 自定义过滤模式：使用用户提供的过滤方法
        this.filteredOptions = this.filterMethod(value)
      } else {
        // 默认过滤模式：根据label进行不区分大小写的包含匹配
        this.filteredOptions = this.options.filter(option => 
          option.label.toLowerCase().includes(value.toLowerCase())
        )
      }
    },
    /**
     * 处理选项点击事件
     * 选择某个选项时调用，更新选中值并关闭下拉框
     * param {Object} option - 被点击的选项对象
     */
    handleOptionClick(option) {
      if (option.disabled) return
      
      // 更新v-model绑定的值
      this.$emit('update:modelValue', option.value)
      // 触发change事件，传递选中的值和选项对象
      this.$emit('change', option.value, option)
      
      // 选择完成后关闭下拉框
      this.dropdownVisible = false
    },
    /**
     * 处理清空操作
     * 点击清空图标时调用，清空选中值
     */
    handleClear() {
      // 清空v-model绑定的值
      this.$emit('update:modelValue', '')
      // 触发change事件，传递空值和null
      this.$emit('change', '', null)
      // 触发clear事件
      this.$emit('clear')
    },
    /**
     * 处理输入框获得焦点事件
     * param {Event} event - 焦点事件对象
     */
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    /**
     * 处理输入框失去焦点事件
     * param {Event} event - 焦点事件对象
     */
    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    }
  },
  /**
   * 自定义指令：点击外部区域关闭下拉框
   * 实现点击组件外部时自动关闭下拉框的功能
   */
  directives: {
    'click-outside': {
      /**
       * 指令绑定时的钩子函数
       * param {HTMLElement} el - 指令绑定的元素
       * param {Object} binding - 指令绑定对象，包含指令的值、参数等
       */
      bind(el, binding) {
        // 为元素添加点击外部事件处理函数
        el.clickOutsideEvent = function(event) {
          // 检查点击目标是否在元素内部
          if (!(el === event.target || el.contains(event.target))) {
            // 点击在外部，执行绑定的回调函数（关闭下拉框）
            binding.value()
          }
        }
        // 在document上监听点击事件
        document.addEventListener('click', el.clickOutsideEvent)
      },
      /**
       * 指令解绑时的钩子函数
       * @param {HTMLElement} el - 指令绑定的元素
       */
      unbind(el) {
        // 移除事件监听器，避免内存泄漏
        document.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 颜色变量
$primary-color: #409eff;
$border-color: #dcdfe6;
$border-hover-color: #c0c4cc;
$text-color: #606266;
$placeholder-color: #c0c4cc;
$disabled-bg-color: #f5f7fa;
$disabled-border-color: #e4e7ed;
$disabled-text-color: #c0c4cc;

.he-select {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  
  // 禁用状态
  &.is-disabled {
    cursor: not-allowed;
  }
  
  // 输入框容器
  &__input {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  // 输入框
  &__inner {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 30px 0 15px;
    border: 1px solid $border-color;
    border-radius: 4px;
    background-color: #fff;
    color: $text-color;
    font-size: inherit;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s;
    
    &::placeholder {
      color: $placeholder-color;
    }
    
    &:hover {
      border-color: $border-hover-color;
    }
    
    &:focus {
      border-color: $primary-color;
    }
    
    // 禁用状态
    &.is-disabled {
      background-color: $disabled-bg-color;
      border-color: $disabled-border-color;
      color: $disabled-text-color;
      cursor: not-allowed;
      
      &::placeholder {
        color: $disabled-text-color;
      }
    }
  }
  
  // 后缀图标区域
  &__suffix {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: $placeholder-color;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: $text-color;
    }
  }
  
  // 清空图标
  &__clear {
    &:hover {
      color: $text-color;
    }
  }
  
  // 下拉箭头
  &__arrow {
    transition: transform 0.3s;
    
    &.is-reverse {
      transform: rotate(180deg);
    }
  }
  
  // 下拉框
  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 5px;
    background: #fff;
    border: 1px solid $border-color;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }
  
  // 加载状态
  &__loading {
    padding: 20px;
    text-align: center;
    color: $placeholder-color;
  }
  
  // 空数据状态
  &__empty {
    padding: 20px;
    text-align: center;
    color: $placeholder-color;
  }
  
  // 选项列表
  &__options {
    list-style: none;
    margin: 0;
    padding: 6px 0;
  }
  
  // 选项
  &__option {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 34px;
    line-height: 34px;
    color: $text-color;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &:hover {
      background-color: #f5f7fa;
    }
    
    // 选中状态
    &.is-selected {
      color: $primary-color;
      font-weight: 600;
    }
    
    // 禁用状态
    &.is-disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
      
      &:hover {
        background-color: transparent;
      }
    }
  }
  
  // 选中图标
  &__check {
    color: $primary-color;
    font-weight: bold;
  }
}

// 下拉框动画
.he-select-dropdown-enter-active,
.he-select-dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.he-select-dropdown-enter-from,
.he-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>