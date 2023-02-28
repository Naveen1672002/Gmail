<template>
  <el-container class="signin">
    <el-card shadow="never">
      <el-image :src="url" class="img" />
      <el-header style="margin-bottom: -7%">
        <p class="head">Find your email</p>
      </el-header>

      <el-main>
        <p class="con">Enter your phone number or recovery email</p>
        <el-input
          v-model="mail"
          type="text"
          style="width: 97%; height: 55px; margin-top: 0%"
          placeholder="Phone number or email"
        />
      </el-main>
      <el-footer style="margin-top: 5%; margin-bottom: 34%">
        <el-row :gutter="20"
          ><el-col :span="6" :offset="0"> </el-col>
          <el-col :span="5" :offset="5" style="margin-left: auto">
            <el-button type="primary" @click="signIn()">Next</el-button></el-col
          >
        </el-row>
      </el-footer>
    </el-card>
  </el-container>
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
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

const signIn = () => {
  ElMessage({
    message: "Mail recovered",
    type: "success",
  });
  router.push("/");
};

const mail = ref();
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
  /* border: 0.1cqh; */
  border-style: solid;
  border-radius: 30px;
  opacity: 0.9;
}

.signin {
  margin-top: 8.5%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0%;
  width: 400px;
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
  font-size: 22px;
  font-style: normal;
  margin-top: auto;
  margin-left: 0%;
}
.body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 0%;
}
.con {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin-top: -7%;
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
