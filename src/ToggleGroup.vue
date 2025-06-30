<template>
  <div 
    :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      content.variant === 'outline' ? 'border border-input bg-transparent' : '',
      content.variant === 'default' ? 'bg-muted' : '',
      content.size === 'sm' ? 'h-9' : content.size === 'lg' ? 'h-11' : 'h-10',
      content.customClass
    )"
    :style="content.customStyle"
    role="group"
    :aria-label="content.label || 'Toggle group'"
  >
    <button
      v-for="(item, index) in content.items"
      :key="item.value || index"
      :class="cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        // States
        isSelected(item.value) ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground',
        item.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted/50',
        // Positioning
        index === 0 ? 'rounded-l-md' : '',
        index === content.items.length - 1 ? 'rounded-r-md' : '',
        index > 0 && index < content.items.length - 1 ? 'rounded-none' : '',
        // Border adjustments for outline variant
        content.variant === 'outline' && index > 0 ? 'border-l-0' : ''
      )"
      @click="toggleItem(item.value)"
      :disabled="item.disabled"
      :aria-pressed="isSelected(item.value)"
      :title="item.tooltip"
    >
      <component
        v-if="item.icon"
        :is="item.icon"
        :class="cn(
          'h-4 w-4',
          item.label ? 'mr-2' : ''
        )"
      />
      {{ item.label }}
    </button>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // Import utility function
    const cn = (...inputs) => {
      return inputs.filter(Boolean).join(' ')
    }

    const selectedValues = ref(props.content.multiple ? [] : null)

    // Initialize selected values
    watch(() => props.content.defaultValue, (newValue) => {
      if (newValue !== undefined) {
        selectedValues.value = props.content.multiple 
          ? (Array.isArray(newValue) ? newValue : [newValue])
          : newValue
      }
    }, { immediate: true })

    // Watch for external value changes
    watch(() => props.content.value, (newValue) => {
      if (newValue !== undefined) {
        selectedValues.value = newValue
      }
    })

    const isSelected = (value) => {
      if (props.content.multiple) {
        return Array.isArray(selectedValues.value) && selectedValues.value.includes(value)
      }
      return selectedValues.value === value
    }

    const toggleItem = (value) => {
      if (props.content.multiple) {
        const currentValues = Array.isArray(selectedValues.value) ? [...selectedValues.value] : []
        const index = currentValues.indexOf(value)
        
        if (index > -1) {
          currentValues.splice(index, 1)
        } else {
          currentValues.push(value)
        }
        
        selectedValues.value = currentValues
      } else {
        // Single selection
        selectedValues.value = selectedValues.value === value ? null : value
      }

      // Emit events
      emit('update:modelValue', selectedValues.value)
      emit('change', {
        value: selectedValues.value,
        item: props.content.items.find(item => item.value === value)
      })
    }

    return {
      cn,
      selectedValues,
      isSelected,
      toggleItem
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 