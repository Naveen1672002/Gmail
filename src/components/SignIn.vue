<template>
  <el-form ref="formRef" :model="mailValidate">
    <el-container class="signin">
      <el-card shadow="never">
        <el-image :src="url" class="img" />
        <el-header>
          <p class="head">Sign in</p>
          <p class="body">Use your Google Account</p>
        </el-header>
        <el-main>
          <el-form-item prop="mail" :rules="[{ required: true, message: '' }]">
            <el-input
              v-model="mailValidate.mail"
              style="width: 97%; height: 60px; margin-top: 4%"
              placeholder="Email or Number"
              clearable
            />
          </el-form-item>
          <el-button
            link
            type="primary"
            @click="router.push('/forgotMail')"
            style="
              font-weight: 550;
              font-size: 14px;
              margin-top: 10px;
              color: cornflowerblue;
            "
            >Forgot email?
          </el-button>
          <p class="con">
            Not your computer? Use Guest mode to sign in privately.
          </p>
          <el-link
            href="https://support.google.com/chrome/answer/6130773?hl=en"
            :underline="false"
            style="
              font-weight: 550;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 14px;
              margin-top: 5px;
              color: cornflowerblue;
              margin-top: 0%;
              border-left: 0px;
            "
            >Learn more
          </el-link>
        </el-main>
        <el-footer style="margin-top: 7%; margin-bottom: 5%">
          <el-row :gutter="20"
            ><el-col :span="6" :offset="0">
              <el-button
                link
                type="primary"
                class="forgotBtn"
                @click="router.push('/createAccount')"
                >Create account
              </el-button></el-col
            >
            <el-col :span="5" :offset="5" style="margin-left: auto">
              <el-button type="primary" @click="nextPage(formRef)"
                >Next</el-button
              ></el-col
            >
          </el-row>
        </el-footer>
      </el-card>
    </el-container>
  </el-form>
  <el-row style="margin-top: 1%" :gutter="20">
    <el-col :span="6" :offset="8">
      <el-dropdown trigger="click" v-model="lang">
        <span style="font-family: Arial, Helvetica, sans-serif">
          {{ lang }} <el-icon><CaretBottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu
            ><span v-for="lan of language">
              <el-dropdown-item
                style="font-family: Arial, Helvetica, sans-serif"
                @click="lang = lan"
                >{{ lan }}</el-dropdown-item
              ></span
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown></el-col
    ><el-col :span="3" :offset="0">
      <el-button link size="small">Help</el-button>
      <el-button size="small" link>Privacy</el-button>
      <el-button size="small" link>Terms</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";

const formRef = ref<FormInstance>();

const mailValidate = reactive({
  mail: "",
});
const router = useRouter();

const nextPage = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      router.push(`/password/${mailValidate.mail}`);
    } else {
      // ElMessage({
      //   message: "Enter email...!",
      //   type: "error",
      // });
      console.log("error submit!");
      return false;
    }
  });
};

const lang = ref("English(United States)");
const language = ref([
  "English(United States)",
  "English(United Kindom)",
  "தமிழ்",
  "Português (Portugal)",
  "ქართული",
]);
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";
</script>

<style scoped>
.forgotBtn {
  font-weight: 550;
  font-size: 14px;
  margin-top: 5px;
  color: cornflowerblue;
  margin-top: 0%;
  border-left: 0px;
}
.img {
  width: 27%;
  /* height: 20%; */
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  /* margin-right: auto; */
  /* margin-block-end: 0; */
}
.signin {
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: 450px;
  border-style: none;
  border-radius: 100px;
}
card {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: 100%;
  border-radius: 100px;
  border-style: none;
  /* border-style: groove; */
}
.head {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22.5px;
  font-style: normal;
  margin-top: 0%;
  margin-bottom: 4%;
  margin-left: 0%;
}
.body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 0%;
}
.con {
  /* text-align: center; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13.5px;
  font-weight: 300;
  margin-top: 10%;
  color: darkslategray;
  margin-bottom: 1%;
  margin-left: 0%;
}
</style>
