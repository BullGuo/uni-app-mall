<script setup lang="ts">
import { addAddress, getAddressDetail, setAddress } from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 表单数据
const formData = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true }],
    label: '收货人',
  },
  contact: {
    rules: [{ required: true }, { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' }],
    label: '手机号码',
  },
  fullLocation: {
    rules: [{ required: true }],
    label: '所在地区',
  },
  address: {
    rules: [{ required: true }],
    label: '详细地址',
  },
}

const form = ref<UniHelper.UniFormsInstance>()

const props = defineProps<{ id?: string }>()

uni.setNavigationBarTitle({ title: props.id ? '修改地址' : '新建地址' })

const handleRegionChange: UniHelper.RegionPickerOnChange = ({ detail: { value, code } }) => {
  formData.value.fullLocation = value.join('/')
  const [provinceCode, cityCode, countyCode] = code!
  Object.assign(formData.value, { provinceCode, cityCode, countyCode })
}

const handleDefaultChange: UniHelper.SwitchOnChange = ({ detail: { value } }) => {
  formData.value.isDefault = +value
}

async function handleAddressSave() {
  await form.value?.validate?.()
  if (props.id) {
    await setAddress(props.id, formData.value)
  } else {
    await addAddress(formData.value)
  }
  uni.showToast({ icon: 'success', title: props.id ? '修改成功' : '添加成功' })
  setTimeout(uni.navigateBack, 400)
}

onLoad(async () => {
  if (props.id) {
    const res = await getAddressDetail(props.id)
    Object.assign(formData.value, res.result)
  }
})
</script>

<template>
  <view class="content">
    <uni-forms :model="formData" :rules="rules" ref="form">
      <uni-forms-item name="receiver" class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="formData.receiver" />
      </uni-forms-item>
      <uni-forms-item name="contact" class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="formData.contact" />
      </uni-forms-item>
      <uni-forms-item name="fullLocation" class="form-item">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          :value="formData.fullLocation.split('/')"
          @change="handleRegionChange"
        >
          <view v-if="formData.fullLocation">{{ formData.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="address" class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="formData.address" />
      </uni-forms-item>
      <uni-forms-item name="isDefault" class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="!!formData.isDefault"
          @change="handleDefaultChange"
        />
      </uni-forms-item>
    </uni-forms>
  </view>
  <button class="button" @tap="handleAddressSave">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
