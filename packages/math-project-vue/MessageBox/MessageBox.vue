<script lang="ts" setup>
import type { MessageBoxProps } from './index.ts'


const {
  closeable = true,

  showCancle = true,

  showConfirm = true,
  
  showIcon = true,
} = defineProps<MessageBoxProps>()

const emit = defineEmits(['cancel', 'confirm'])

function handleCancle() {
  emit('cancel')
}
function handleConfirm() {
  emit('confirm')
}
</script>

<template>
  <div
    class="fles absolute left-0 top-0 z999 h-full w-full content-center items-center bg-#3e36487a"
  >
    <div class="relative ma w-100 overflow-hidden rounded-xl bg-#e1e1e1 p-10">
      <div v-if="closeable" class="× absolute right-5 top-5 size-10 cursor-pointer" @click="handleCancle" />
      <!-- 弹窗内容 -->
      <div flex items-center gap-3 text-xl>
        <div v-if="showIcon" class="mb-a size-20" />
        <div flex-1>
          <p v-if="title">
            {{ title }}
          </p>
        </div>
        <div w-full break-words>
          {{ content }}
        </div>
      </div>
    </div>
    <!-- 操作按钮 -->
    <div mt-4 flex justify-center gap-10>
      <button
        v-if="showCancle"
        class="cursor-pointer rounded-sm bg-red text-white"
        @click="handleCancle"
      >
        取消
      </button>
      <button
        v-if="showConfirm"
        class="cursor-pointer rounded-sm border-none bg-primary px-12 text-white"
        @click="handleCancle"
      >
        确定
      </button>
    </div>
  </div>
</template>
