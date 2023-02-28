<template>
  <el-form ref="formRef" :model="validate">
    <el-container class="signin">
      <el-card shadow="never">
        <el-image :src="url" class="img" />
        <el-header>
          <p class="head">Welcome</p>
          <span class="btn" @click="dialogVisible = true">
            <el-button round text @click="router.push('/choose')">
              <el-icon><UserFilled /></el-icon><Span> </Span>
              {{ $route.params.id }}
              <el-icon style="margin-left: 13%"
                ><ArrowDown
              /></el-icon> </el-button
          ></span>
        </el-header>

        <el-main>
          <p class="con">To continue, first verify that it's you</p>
          <el-form-item
            prop="password"
            :rules="[{ required: true, message: '', min: 5, max: 15 }]"
          >
            <el-input
              v-model="validate.password"
              :type="show ? 'text' : 'password'"
              style="width: 97%; height: 60px; margin-top: 4%"
              placeholder="Enter your password"
              clearable
            />
          </el-form-item>
          <el-checkbox v-model="show" style="border: black margin-top: 3%;"
            ><span
              style="font-size: 16px; font-family: Arial, Helvetica, sans-serif"
            >
              Show password
            </span></el-checkbox
          >
        </el-main>
        <el-footer style="margin-top: 7%; margin-bottom: 5%">
          <el-row :gutter="20"
            ><el-col :span="6" :offset="0">
              <el-button
                link
                type="primary"
                class="forgotBtn"
                @click="router.push(`/forgotPassword/${$route.params.id}`)"
                >Forgot password?
              </el-button></el-col
            >
            <el-col :span="5" :offset="5" style="margin-left: auto">
              <el-button type="primary" @click="passwordValidate(formRef)"
                >Next</el-button
              ></el-col
            >
          </el-row>
        </el-footer>
      </el-card>
    </el-container></el-form
  >
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { ElMessage, ElNotification } from "element-plus";
const router = useRouter();
const validate = reactive({
  password: "",
});
const formRef = ref<FormInstance>();
const dialogVisible = ref(false);
// const password = ref();
const show = ref(false);

const passwordValidate = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      // ElNotification({
      //   title: "Success",
      //   message: "Logged in successfully",
      //   type: "success",
      // });
      router.push("/mainPage");
    } else {
      // ElMessage({
      //   message: "Enter valid password...!",
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
.btn {
  /* max-width: 50%; */
  width: auto;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 5%;
  padding: 0.5px;
  border-color: rgb(248, 245, 245);
  border: 0.1cqh;
  border-style: solid;
  border-radius: 30px;
  opacity: 0.9;
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
  font-size: 25.5px;
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
  font-size: 15px;
  font-weight: 300;
  margin-top: 10%;
  color: darkslategray;
  margin-bottom: 8%;
  margin-left: 0%;
}
.forgotBtn {
  font-weight: 550;
  font-size: 14px;
  margin-top: 5px;
  color: cornflowerblue;
  margin-top: 0%;
  border-left: 0px;
}
/* .nxtBtn {
  background-color: royalblue;
  font-weight: 550;
  font-size: 12px;

  margin-top: 5px;
  /* color: cornflowerblue; */
/* margin-top: 0%; */
/* margin-left: auto; */
/* border-left: 25px; */
/* }  */
</style>
