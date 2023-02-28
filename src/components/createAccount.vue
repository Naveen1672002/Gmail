<template>
  <el-container class="signin">
    <el-card shadow="never">
      <el-container class="el-container">
        <el-main class="main">
          <el-header>
            <el-image :src="url" class="img" />
            <p class="head">Create your Google Account</p></el-header
          >
          <el-main style="margin-top: 10%">
            <el-row :gutter="20">
              <el-col :span="3" :offset="1">
                <el-input
                  clearable
                  v-model="fname"
                  placeholder="First name"
                  style="width: 100px; height: 40px"
              /></el-col>
              <el-col :span="3" :offset="4">
                <el-input
                  clearable
                  v-model="lname"
                  placeholder="Last name"
                  style="width: 100px; height: 40px"
              /></el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 2%">
              <el-col :span="3" :offset="1">
                <el-input
                  clearable
                  placeholder="Username"
                  style="width: 330px; height: 40px"
                  v-model="mail"
                >
                  <template #append>@gmail.com</template>
                </el-input></el-col
              >
            </el-row>
            <span class="content1">You can use letters,numbers & periods</span>
            <p>
              <el-button link type="primary" class="btn1"
                ><b>Use my current email address instead</b></el-button
              >
            </p>
            <el-row :gutter="20" style="margin-top: 5%">
              <el-col :span="3" :offset="1">
                <el-input
                  clearable
                  :type="show ? 'text' : 'password'"
                  v-model="password"
                  placeholder="Password"
                  style="width: 100px; height: 40px"
              /></el-col>
              <el-col :span="3" :offset="4">
                <el-input
                  clearable
                  :type="show ? 'text' : 'password'"
                  v-model="confirm"
                  placeholder="Confirm"
                  style="width: 100px; height: 40px"
              /></el-col>
            </el-row>
            <span class="content1"
              >Use 8 or more characters with a mix of letters, numbers &
              symbols</span
            ><br />
            <el-checkbox
              v-model="show"
              style="border: black margin-top: 3%; margin-left: 4%;"
              ><span
                style="
                  font-size: 16px;
                  font-family: Arial, Helvetica, sans-serif;
                "
              >
                Show password
              </span></el-checkbox
            >
          </el-main>
          <el-footer style="margin-top: 15%; margin-bottom: 0.1%">
            <el-row :gutter="20"
              ><el-col :span="6" :offset="0">
                <el-button
                  link
                  type="primary"
                  class="btn1"
                  @click="router.push(`/`)"
                  ><b style="margin-left: 15%">Signin instead</b>
                </el-button></el-col
              >
              <el-col :span="5" :offset="5" style="margin-left: 50%">
                <el-button size="medium" type="primary" @click="signUp()"
                  >Next</el-button
                ></el-col
              >
            </el-row>
          </el-footer> </el-main
        ><el-aside
          ><el-image :src="urlImage" class="image1"></el-image>
          <p
            style="
              font-weight: lighter;
              font-family: sans-serif;
              text-align: center;
              margin-left: 35px;
              margin-right: 50px;
              margin-top: 0%;
              opacity: 0.8;
              text-shadow: none;
            "
          >
            One account. All of Google working for you.
          </p>
        </el-aside>
      </el-container>
    </el-card>
  </el-container>
  <el-row style="margin-top: 1%" :gutter="18">
    <el-col :span="6" :offset="6">
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
    ><el-col :span="3" :offset="4">
      <el-button link size="small">Help</el-button>
      <el-button size="small" link>Privacy</el-button>
      <el-button size="small" link>Terms</el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ref } from "vue";

const router = useRouter();
const show = ref(false);
const mail = ref("");
const fname = ref("");
const lname = ref("");
const password = ref("");
const confirm = ref("");
const signUp = () => {
  ElMessage({
    message: "Account created",
    type: "success",
  });
  router.push("/");
};

const lang = ref("English(United States)");
const language = ref([
  "English(United States)",
  "English(United Kindom)",
  "தமிழ்",
  "Português (Portugal)",
  "ქართული",
]);
const urlImage = "https://ssl.gstatic.com/accounts/signup/glif/account.svg";
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";
</script>

<style>
.head {
  /* text-align: center; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-style: normal;
  margin-top: -1%;
  margin-bottom: 4%;
  margin-left: 4%;
}
.img {
  width: 32%;

  display: grid;
  /* margin-left: auto; */
  margin-right: auto;
  margin-top: 0%;
  margin-left: -2%;
  margin-bottom: 0%;
}
.signin {
  margin-top: 2.5%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  width: 50%;
  border-style: none;
  border-radius: 100px;
}
card {
  margin-top: 20px;
  margin-left: 0%;
  margin-right: 0%;
  margin-bottom: auto;
  width: 100%;
  border-radius: 100px;
  border-style: none;
  /* border-style: groove; */
}
.content1 {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5.5%;
  opacity: 0.7;
}
.btn1 {
  color: rgb(46, 78, 172);
  font-weight: bolder;
  margin-left: 4%;
}
.image1 {
  margin-top: 105px;
  margin-left: 5%;
  width: 250px;
}
el-aside {
  width: 100px;
  overflow: auto;
  box-sizing: border-box;
}
.main {
  margin-top: -1%;
  margin-left: -4%;
  margin-right: 0%;
  width: 750px;
}

.el-container {
  margin-left: auto;
  margin-right: auto;
}
</style>
