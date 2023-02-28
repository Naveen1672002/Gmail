<template>
  <el-container class="signin">
    <el-card shadow="never">
      <el-image :src="url" class="img" />
      <el-header>
        <p class="head">Choose an account</p>
      </el-header>
      <span v-for="mail in mails">
        <el-container class="mail" @click="router.push(`/password/${mail.id}`)">
          <el-aside class="aside"
            ><el-avatar size="small" :src="circleUrl"
          /></el-aside>
          <el-main style="margin-top: -8%; margin-bottom: -10%"
            ><p class="mailName">
              {{ mail.name }}
            </p>
            <span
              style="
                font-size: small;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              {{ mail.id }}
            </span>
          </el-main>
        </el-container>
        <hr />
      </span>
      <el-container class="mail" @click="router.push('/')">
        <el-aside class="aside"
          ><el-icon><User /></el-icon>
        </el-aside>
        <el-main style="margin-top: -6%; margin-bottom: -9%"
          ><p class="uaaP">Use another account</p>
        </el-main>
      </el-container>
      <el-main style="margin-top: -6%; margin-bottom: 35%" />
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
import { useRouter } from "vue-router";
const router = useRouter();

const mails = ref([
  { name: "Gopi", id: "gopi7777777@gmail.com" },
  { name: "Naveen", id: "naveensk2002@gmail.com" },
  { name: "Gowtham", id: "gowtham@gmail.com" },
]);
const lang = ref("English(United States)");
const language = ref([
  "English(United States)",
  "English(United Kindom)",
  "தமிழ்",
  "Português (Portugal)",
  "ქართული",
]);
const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
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

.mail {
  height: max-content;
  margin-top: 0.5%;
  margin-bottom: 0%;
}
.mail:hover {
  height: max-content;
  margin-top: 0.5%;
  background-color: rgb(241, 239, 248);
  cursor: pointer;
  /* border-radius: 10px; */
}

.aside {
  width: min-content;
  margin-top: 2.5%;
  margin-left: 3%;
  margin-bottom: 0%;
}
.mailName {
  font-size: small;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0%;
}
hr {
  margin-top: 1%;
  margin-bottom: 1%;
  opacity: 0.5;
  orientation: portrait;
}
.uaaP {
  font-size: small;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.5%;
}
</style>
