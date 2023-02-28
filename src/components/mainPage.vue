<template>
  <el-container>
    <!-- Compose dialogue -->
    <!-- Header -->
    <el-dialog
      v-model="visible"
      style="
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 15%;
        margin-left: 50%;
        border-radius: 5px;
        margin-bottom: 0%;
      "
      :show-close="false"
      width="45%"
    >
      <template #header="{ close, titleId, titleClass }">
        <el-row class="row">
          <h1
            :id="titleId"
            :class="titleClass"
            style="
              font-size: 14px;
              margin-top: 1%;
              margin-left: 2%;
              margin-right: 2%;
            "
          >
            New message
          </h1>
          <el-icon style="margin-top: 0%; margin-left: 70%; margin-right: 2%">
            <Minus />
          </el-icon>
          <el-icon size="15" style="margin-top: -0.15%">
            <TopRight></TopRight>
          </el-icon>
          <el-icon
            size="15"
            style="margin-top: 1%; margin-left: -2.8%; margin-right: 2%"
          >
            <BottomLeft></BottomLeft>
          </el-icon>
          <el-icon @click="close" style="margin-top: 0%">
            <Close />
          </el-icon>
        </el-row>
      </template>
      <!-- To -->
      <el-row style="margin-top: -4%; margin-left: -1%"
        >To <span style="margin-left: auto">Cc Bcc</span></el-row
      >
      <hr />
      <!-- Subject -->
      <el-row style="margin-top: 1%; margin-left: -1%; margin-bottom: 1.5%"
        >Subject
      </el-row>
      <hr />
      <!-- Footer -->
      <el-row style="margin-top: 45%; margin-left: -1%; margin-bottom: -3%">
        <el-button type="primary" round style="background-color: blue">
          Send
          <el-icon style="margin-left: 15%">
            <CaretBottom />
          </el-icon>
        </el-button>
        <span style="margin-top: 1%; margin-left: 1.3%"> A </span
        ><el-icon style="margin-left: -1.8%; margin-top: 2.5%"
          ><SemiSelect
        /></el-icon>
        <el-icon size="20" class="icons"><Paperclip /></el-icon>
        <el-icon size="20" class="icons"><Link /></el-icon>
        <el-icon size="20" class="icons"><PictureFilled /></el-icon>
        <el-icon size="20" class="icons"><Lock /></el-icon>
        <el-icon size="20" class="icons"><EditPen /></el-icon>
        <el-icon size="20" class="icons"><Menu /></el-icon>
        <el-icon size="20" class="icons"><Message /></el-icon>
        <el-icon size="20" class="icons" style="margin-left: 48%"
          ><Delete
        /></el-icon>
      </el-row>
    </el-dialog>

    <!-- Header -->

    <el-header
      style="background-color: rgb(241, 244, 244); width: 100%; height: auto"
    >
      <el-row>
        <el-col>
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            style="background-color: rgb(241, 244, 244)"
          >
            <el-menu-item index="0">
              <el-icon
                v-show="isCollapse"
                class="expand"
                :size="60"
                @click="isCollapse = !isCollapse"
                ><Expand
              /></el-icon>
              <el-icon
                v-show="!isCollapse"
                class="expand"
                :size="60"
                @click="isCollapse = !isCollapse"
                ><Fold
              /></el-icon>
            </el-menu-item>
            <el-menu-item index="1" class="menu1"
              ><el-image style="margin-top: -10%" :src="url"></el-image
            ></el-menu-item>
            <el-menu-item
              index="2"
              style="margin-top: 1%; max-width: fit-content; margin-left: 50px"
            >
              <el-input
                placeholder="Search email"
                :prefix-icon="Search"
                style="width: 650px; height: 45px; margin-top: -1%"
                :suffix-icon="Operation"
              />
            </el-menu-item>
            <el-row style="margin-left: 21%; margin-right: 0%">
              <el-menu-item index="3" class="icon">
                <el-icon :size="70"><QuestionFilled /></el-icon>
              </el-menu-item>
              <!-- <el-menu-item index="3" class="menu1"></el-menu-item> -->
              <el-menu-item
                index="4"
                style="margin-top: 0%; border-radius: 50px"
                class="icon"
              >
                <el-icon :size="70"><Setting /></el-icon>
              </el-menu-item>
              <el-menu-item index="5" class="icon">
                <el-icon :size="70" @click="iconVisible = true"
                  ><Grid
                /></el-icon>
              </el-menu-item>
              <el-menu-item
                style="margin-top: 0%; border-radius: 50px"
                @click="profile = true"
              >
                <el-avatar class="icon">
                  <el-icon
                    size="large"
                    style="margin-left: auto; margin-right: auto"
                    ><UserFilled
                  /></el-icon>
                </el-avatar>
              </el-menu-item>
            </el-row>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <!-- ASIDE MENU -->
    <el-container style="width: 100%; height: 100%">
      <el-aside width="120px" style="font-family: Arial, Helvetica, sans-serif">
        <el-menu
          style="background-color: rgb(241, 244, 244); height: 100%"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          @mouseenter="isCollapse = false"
          @mouseleave="isCollapse = true"
        >
          <el-menu-item index="1">
            <el-icon @click="visible = true"><EditPen /></el-icon>
            <template #title>
              <span @click="visible = true"> Compose </span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon @click="Starred = false">
              <Picture v-show="Starred" />
              <PictureFilled v-show="!Starred" />
            </el-icon>
            <template #title>
              <span @click="Starred = false"> Inbox </span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon @click="str()">
              <Star v-show="!Starred" />
              <StarFilled v-show="Starred" />
            </el-icon>
            <template #title>
              <span @click="str()"> Starred </span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><Clock /></el-icon>
            <template #title>Snoozed </template>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><Position /></el-icon>
            <template #title>Sent </template>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><Document /></el-icon>
            <template #title>Drafts </template>
          </el-menu-item>
        </el-menu>
        <!-- extras -->
        <el-col
          style="
            background-color: rgb(241, 244, 244);
            margin-top: 0%;
            width: 53%;
          "
        >
          <el-row style="margin-top: 0%"></el-row>
          <el-row style="margin-top: 10%; margin-left: 20%"
            ><span>
              <el-icon size="25" @mouseenter="chat = true"
                ><ChatSquare
              /></el-icon>
              <span class="con">Chat</span></span
            >
          </el-row>
          <el-row
            style="margin-top: 28%; margin-left: 10%"
            @mouseenter="space = true"
          >
            <el-icon size="25" style="margin-left: 2%"><User /></el-icon>
            <el-icon size="25" style="margin-left: -25%"><User /></el-icon>
            <el-icon size="25" style="margin-left: -25%"><User /></el-icon>
            <span style="margin-left: -2%; margin-top: 8%">Spaces</span>
          </el-row>
          <el-row
            style="margin-top: 28%; margin-left: 22%"
            @mouseenter="meet = true"
          >
            <el-icon size="25"><VideoCamera /></el-icon>
            <span class="con">Meet</span>
          </el-row>
          <el-row style="margin-top: 190%"></el-row>
        </el-col>
      </el-aside>

      <!-- Header -->
      <el-header style="margin-top: -41%; margin-left: 7%">
        <el-row>
          <el-dropdown trigger="click" v-model="value" style="margin-top: 0.5%">
            <span style="font-family: Arial, Helvetica, sans-serif">
              {{ value }}
              <el-icon><CaretBottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu
                ><span v-for="lan of choose">
                  <el-dropdown-item
                    style="font-family: Arial, Helvetica, sans-serif"
                    @click="value = lan"
                    >{{ lan }}</el-dropdown-item
                  ></span
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-icon style="margin-top: 0.5%; margin-left: 2%" :size="15"
            ><RefreshRight
          /></el-icon>
          <el-icon style="margin-top: 0.5%; margin-left: 2%" :size="15"
            ><More
          /></el-icon>
        </el-row>
      </el-header>
      <!-- main -->
      <el-main
        style="
          margin-left: 7%;
          margin-top: -3%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        <!-- All -->
        <el-table
          :data="tableData"
          v-show="!Starred"
          style="font-size: 14px"
          height="550"
        >
          <el-table-column width="50">
            <template #default="scope">
              <el-icon v-show="scope.row.select == false"
                ><CircleCheck
              /></el-icon>
              <el-icon v-show="scope.row.select == true"
                ><CircleCheckFilled
              /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <el-icon v-show="scope.row.star == true"><StarFilled /></el-icon>
              <el-icon v-show="scope.row.star == false"><Star /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="250">
            <template #default="scope">
              {{ scope.row.by }}
            </template>
          </el-table-column>
          <el-table-column width="850">
            <template #default="scope">
              <b>{{ scope.row.sub }}</b> - {{ scope.row.msg }}
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <b>{{ scope.row.date }} </b></template
            >
          </el-table-column>
        </el-table>
        <!-- Starred -->
        <el-table
          :data="tableDataStar"
          v-show="Starred"
          style="font-size: 14px"
          height="550"
        >
          <el-table-column width="50">
            <template #default="scope">
              <el-icon v-show="scope.row.select == false"
                ><CircleCheck
              /></el-icon>
              <el-icon v-show="scope.row.select == true"
                ><CircleCheckFilled
              /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <el-icon v-show="scope.row.star == true"><StarFilled /></el-icon>
              <el-icon v-show="scope.row.star == false"><Star /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="250">
            <template #default="scope">
              {{ scope.row.by }}
            </template>
          </el-table-column>
          <el-table-column width="850">
            <template #default="scope">
              <b>{{ scope.row.sub }}</b> - {{ scope.row.msg }}
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <b>{{ scope.row.date }} </b></template
            >
          </el-table-column>
        </el-table>
        <!-- <el-table
          :data="tableDataStar"
          v-show="Starred"
          style="font-size: 14px"
          height="550"
        >
          <el-table-column width="50">
            <template #default="scope">
              <el-icon
                v-show="scope.row.select == false && scope.row.star == true"
              >
                <CircleCheck />
              </el-icon>
              <el-icon
                v-show="scope.row.select == true && scope.row.star == true"
              >
                <CircleCheckFilled />
              </el-icon>
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <el-icon v-show="scope.row.star == true && scope.row.star == true"
                ><StarFilled
              /></el-icon>
              <el-icon
                v-show="scope.row.star == false && scope.row.star == true"
                ><Star
              /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="250">
            <template #default="scope">
              <span v-show="scope.row.star == true">
                {{ scope.row.by }}
              </span>
            </template>
          </el-table-column>
          <el-table-column width="850">
            <template #default="scope">
              <span v-show="scope.row.star == true">
                <b>{{ scope.row.sub }}</b> -
                {{ scope.row.msg }}
              </span>
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template #default="scope">
              <span v-show="scope.row.star == true">
                <b>{{ scope.row.date }} </b></span
              >
            </template>
          </el-table-column>
        </el-table> -->
      </el-main>
    </el-container>
    <el-dialog
      :show-close="false"
      v-model="iconVisible"
      style="
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 5%;
        width: 18%;
        margin-left: 82%;
        margin-right: 0%;
        border-radius: 5px;
        margin-bottom: 0%;
      "
    >
      <el-row style="margin-top: -15%">
        <el-avatar class="ava" :size="60">
          <el-icon size="30"><UserFilled /></el-icon>
        </el-avatar>
        <el-avatar
          class="ava"
          :size="60"
          src="data:image/png;base64,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"
        />
        <el-avatar
          :size="60"
          src="data:image/png;base64,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"
        />
      </el-row>
      <el-row>
        <span style="margin-right: 18%; margin-left: 1.8%">Account</span>
        <span style="margin-right: 20%">Gmail</span>
        <span>Drive</span>
      </el-row>
      <el-row style="margin-top: 5%">
        <el-avatar
          class="ava"
          :size="60"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAeFBMVEX///8mhPwAZtocgfxro/37/P8Aefw3ifx8qf1Cjfz5+v9lnPzw8/4fgvxcmP0nhv4Wc+iMsf0AYNiRtP0UfPx5tv7w+f/I4/8hiPxmpv2PwP/o8v9uo/grf+nx9//y/P+Grf1AjPxKl/swg/IYc+K02f8xhe6/3P0P4TFYAAACdklEQVR4nO3dYVOiUBSHcYHCtFiSsFLbrdzavv83XKbthUKKh/8djjv3+b1nhvvMVQ6OymQCAAAAAAAAAAAAAMCpLk28z/bMPCwfc4vfv7zP+Jys8qxIDMrbn/fe53w+trWl3We+6o1+X9bWek2+tOL1+88mMb1wv/Kl1duz95mfhXfz5vvM1/Rj/zWesmH50orrR+NiaL6mH/tPyJdWf9h/Qr6U+UXKx/uflo/5RcsX/fws5ot9/6n5Ip+f5XxxXz/0fFHPzwHyxTw/h8gX8fwcJF+8739h8kW7/wLli/X6ESpfpPNzsHxx7r9w+aK8fgTMF+P+C5kvwn4D8jWKA+pr7/WMbFi+Q7IL7/WMjHwS8knIJyGfhHwS8knIJyGfhHwS8knIJ+nmO/RxwHfI185XTg1K8rUCvMxvTjZ/aR8dfb6F5egF+cgnIJ+EfJJOvjvL0Xfk2w+QzK4MZgn59hWZQXtuJp+EfOSzIJ+EfBLyScgnaecrpjODaUG+/QCLyfxk3LRxzyshn4R8EvJJ+MBK0pn7Xq8NXhPytRMYdI4ln4J85LMgn4R8EvJJyCfpfGDV+w0r8u2w33Uc+7dO8vXd816Sbwf5JOSTkE/yTb6e5yWQb0dn7pv+6HGkHvn6f5dAvh3cdUjIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJxnwfN5j+Z681zOyAU+HPqJ+917PyDal+dnkhxXJxns9Y1sH3H712ns149sG61dvvdfiYZV3/g1ogCLLV94r8fGxLHPZ4/LBex1uer7SdxLvNQAAAAAAAAAAAAAA/iN/AZgsSk/PUEtBAAAAAElFTkSuQmCC"
        />
        <el-avatar
          class="ava"
          :size="60"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEX///8ArEcAgy0AqkFhv3z6/fsApTAArEgAogz2+fUAq0Qyr0/w9vBauWkArkgAp0QAlDl7wollu3M2rlSRy5FEs1BAsVoAfiIApjjA79Fp0o4Auk4mmkrk+OwAsESo78Mul0zy/vfo8umz2beKx5Kczp6q1K16wIE2uWMipE5TzoAZjz2C5aYxoFMAojlVunMbW84AAAACvUlEQVR4nO3df0/aQACH8dLaqkXYFBwFBDd/wZBt7//drZTVtFI2r99Lj+WeT/yDXGrSe3LUowoGAQAAAAAAAAAAAAAAHxUbcX22J2Y6mycmvl+5PuMTEm+SKO0ZGH6+o18pXmcm7Yp8k9dvrk/7VGxN6+X5wsndpevzPg2LpWm9Xb68H+tv59548RX5wskr6y93FrXLx/ortM4XTr7y81fIF05+sP6EfPn6876fki+//vn+/JXyhd7vn7V83u+fxXy+rz81n+f7Zzmf3/tnPZ/X+2cL+XzeP9vIl1//fF1/VvL5e/2zk8/b/YulfL7un23l83T9Wcvn5/qzl8/L+1cW8/m4f7aZL98/+9avRb7ep6N+/nI9n461ydcbDvOvvV7xsPfnQXTmej4da5XvKPKRzwT5JOSTkE9CPgn5JOSTkE9CPgn5JO/ypcbIV6nXN5aSr3R+8XBl6OHinHxv+Yx/XXFJPvK1Rj4J+STkkzTme1xdVz3tD32qDa4ei0HyHeYbJ1nV7f7Q29pgMi4GydeQr76XLvPVd8jkC8gnIp+EfBLySZrzZdVbUlGZL6qOZuQLjuR7Hn2pGuwPHdQGR8/FIPkO8zV/bFDjKPkO8xkgH/naI5+EfBLySRrzvdzUrPaHruqjL8Ug+Q7zjbOo6m3bXMW2eYcXbRLyScgnIZ+EfBJuWEmab1j1R1XlDavaYJ8bVgGvOkTkk5BPQj4J+STkk9T/NDwaGKt/v9/5eGOCId4WIyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHySFv8d+i+ye9fz6dhimf67yoctF67n07WtxeWXbV3PpnPx2lq/bB27nk334k0SWXgCp1Gy8bBebjqbJ7L5bOp6Hs68/5iCNlzPAQAAAAAAAAAAAADwH/kNpXpbs9DP0hgAAAAASUVORK5CYII="
        />
        <el-avatar
          :size="60"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAclBMVEX/////ugD/lQD/tQD/ymH//fr/uAD/sgD/+vb/kwD/vDL/9/D/6Mn/05H/zHv/5sT/pQD/+vD/2mn+vgD+zlL/oyX/34D/+OT/7af5yGP/oB7/oy7/8+j/37P/0Yr/79z+xTb/8MD/sCL/qDD/xVX+7LeKbyK7AAACYUlEQVR4nO3d207bQBRGYePBY8yhaeMQDuUQaPv+r1hj1IJIQrLnH3mC9vqufeFZ2oon0siuKgAAAAAAAAAAAAAA9tWYlL7bA/M074PF81npOz4gzSLEeGTx/ZJ+/zQrW7uXfN3tj9K3fSiWwVpvyNcxf6+uevPwDflq5u/VtX34XvIN/U5K3/ohuLEP35iv7i6Zv6o6Ts1Xdz/5/RPy1d0v5k/Ix/NDy1ezf5HyMX9aPvfzJ+bzPn9qvqGf5/mT8/neP+v5XO+fM+TzvH/Okc/x71+WfH73L3nyud2/ZMrndf5y5XM6f9ny+Xx+5Ms37P/8zV/GfB73z2n5tnHXLyVf3Hp8o/1dej0TS8n3Sdjj0uuZGPkk5JOQT0I+Cfkk5JOQT0I+Cfkk5JOQT7IjnzGu83zx1CyS77/27szoriXfWz7zcfkT8pEvGfkk5JOQT7Ix3/23PdyPl5JvPd9FiDuFi/FS8m3It8efjUi+inwi8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHwS8knIJyGfhHySjfke2t0vMG0fxkvJt57vcbaHx/FS8q3nMyAf+dKRT0I+yYd85heqN+R7E2bnRrNAvnf9zI7Ilw35yGdBPgn5JOSTkE9CPgn5JOSTkE9CPgn5JOSTkE9CPgn5JOSTkE9CPgn5JOSTkE9CPgn5JOSTpHyf95N8N6XXM7GUr0NvF65Lr2diKd8m3yr2V6XXM7VlxvELy9KrmVyzyjZ+cWU+Hvj1NYsQMxSMMSwc1hv8mff2c30f9fOn0usopsmg9BoAAAAAAAAAAAAAAF/IX6u4RB+BfDywAAAAAElFTkSuQmCC"
        />
      </el-row>
      <el-row>
        <span style="margin-right: 18%; margin-left: 6%">Docs</span>
        <span style="margin-right: 20%">Sheets</span>
        <span>Slides</span>
      </el-row>
      <el-row style="margin-top: 5%">
        <el-avatar
          class="ava"
          :size="60"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA9lBMVEX///9ChfT7vAQ0qFMZZ9IYgDjqQzU5gfQ2f/Svx/qYuPgxffPQ3fzF1vv+68n7uAD81obC4Mggo0er1rVjl/Xq8P06fuoAYti7oHP7vwA4hb31lx8VgCcvnU0rqlR+j03pOjbxPDMAYdEAey2KqOOlvOmKtZSlxa3pMyEmefO90Prn7v1zofbwhH3f6P2hvvmFq/f09/6owvnwioTB0O8AV85De9dei9tRjfQyctVrnPa5yu6EpufCxtbVxq3U4fyJrvcAb/JYkfWUt9egx8XSzKH3kwb6ypcUpUfve3rc6N+50b8Adh9UmGUxiUnvKBxDkFd3hDjW+JvDAAAEb0lEQVR4nO3c63abRhSGYeSqZdCIpmmlpuckzskDqjBu1KrqAcVt0yZ22uT+b6YI0AG2BjsLw2i8v/dHsoSA5XkWYATIjoMQQgghhBBCCCGEEEIIIYQQQggh1F2x77XRkz09H5se7LUajpRoIVce7+ne7Mfnpgd8dRPZa6fP+/ub/WR6yFc1Fy2RaE36xz+bHnR9C7ctEr1J//igtxS/rR2n1qQ/+8X0wGuat0dSZ9I/4L1n2uJmUmsym5oeujavtQPsFSbHT0wPXdvAmMlj00PXNmjvtw5MYAITmMAEJiSY0GBCgwkNJjSY0GBCgwkNJjSY0GBCgwkNJrRak6Y3R+U9fbNfTQ9dW52JiPxm/fZFTb+bHrq2OhOZNFz5x3eOtN355EZ+/jaqNRk2XHmdyRFMYFIEExpMaDChwYQGExpMaDChwYTGw2TqB4F/7aeuGJgkEymzSwBq4e9fWxBFkbd9eetN4oXazOvK3r79aiFdV5xvX992k9Atz6kG1VUl+Ryj7ZRbbhKSZ0ZlBWWg8ul8TDY7TVqxiNrdjMbn6wco2ZgsRbFtJGGYDESx0HY1wXYz4mISFvtF8XWkeOSW39/9tgsXk2S+2mFkvFks35GW+Ytpb3clXEzScZ8qtXPmkT+Sng9//CKfXYyYmaQ7TLTzIv/qwrxYRwakvFhyMymVm6xPz1b7US90xrxN/NWm4U6KV4lSp+l/zE2yL8yJzQFmGaz+5W3iZaNXcXkqa5NlNngRVSbzNJl6nhdN8pN7Maq+y9PEU0IUn48lIWFqEmy+Ked6dF3sTaoHEwcmPVeQd3maeGp1/aS4VKCCyrs8TbJif5FfGlCV55gYm6QNcxS3PJW3SXF5VpR/+TA3cc6y5c5L07ib5NdKVGkadxMnG78s/b0obibxWUUoNwl3J/EySU6Vu7mClJWPX8Z0GhOT4YvVXGr3eYIoO6OVpXWxMlnfBdwuNs1u+JQ3HWYmZ/nnnPn68FH8YSpZfuSCl8l6Q1Gnw3EcBqPitt+8vC5mJklxc9QVq8+Aa6HKA0vMTJxAkbfxudhXlTkJCT8TZzyS23ldeR6SdY3TkxhXcDJZPeOnpBBu9pDfvtP+8WKSttxOYGCSNvQGg8i77nOzPEzeL5jQYEKDCQ0mNJjQYEKDCQ0mNJjQbDURrjbV2OToS20HbPLHVzX9ebdZf738WtvLv00PXdvTb2r6tFn/3H/4QNfJK9Mj1/f00Yf6vv2gUd/df/iRppPvTQ+8JjMmB01ixuSwSYyYHDiJCZNDJzFgcvAk3ZscPknnJhaQdG1iA0nHJlaQdGtiB0mnJpaQdGliC0mHJtaQdGdiD0lnJhaRdGVy8oPpgb5H3ZhYRdKNiV0kzrMOTCwjcV5ftm5iG4nj/Nu2iX0kzkXNhnITJhaSOM4b/RHlBkysJEn3Hi1KcxNLSdItRbf7NDb5z1aS9Jjy9vLy0Z6a3ht9Z9EJPe31xbM9fdawC9PDQgghhBBCCCGEEEIIIYQQQgghhBBy/gc6aPvUt7Cq7gAAAABJRU5ErkJggg=="
        />
        <el-avatar
          class="ava"
          :size="60"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAjVBMVEX///8ArEdbuXQAgy1eu3cAqDuc2LDw+PJMtGlStm2z3L0AqkAqlkgAjDNsx4oAlDiq2baBzZl1ypCGyZcVsFHC48rZ7t4ApjEAhi8Ap0T0+vV/x5JPtWtivHq64MPK5tGTz6JOrWk2nlNLvXIntFpXwXsVizg8uWjo9+50w4gAnj5FpmCj1bCF0J3d8+U/t/07AAAC3klEQVR4nO3diVLbMBhF4WwGO6YF0iwlhD2lUNq+/+M1ZIZbiC0Fx9ZIGp3zBv83lpKJHbnXIyIiIiIiIiIiIiIiIiIiIk8tjzts6Xuaw5tdFnmnDS5nvmc6qPloNei8/Grue67mjfPuIbYY174na9rMkcTG4sb3bM06drA43lrFtX3eFu4oiiPf0zXK2fLYWvierklzpxR5TJ8iY4frY7NZxPQhcuaUohj7nq9BUCgoFBQKCgWFgkJBoaBQUCgoFBQKCgWFgkJBoaBQ42J0cPFSzI/OJ5XuTg7u/mWvRpgUZ9NFVlY7HbbpPkKK5cOiX1s7iuFjfBTrsl6iLcVwGBvFj8wg0Z7i0bZfhEcxM6yOLiiG9xaL8Ch+mpZHFxTDmCiezBdFFxSWW/HBUVwbd4pOKCwrJDiKIyjeckxxAgUUUEABBRRQQAEFFFD0oHgXFAoKBYWCQkGhoFBQKCgUFAoKBYWCQkGhoFBQKCgUFAoKBYWCQkGhbBS/3FKEdg6SjeLCKUX+5Hv2nWwUfacUV75H381K0X6zMFPkoa0PO0X/uzOK4tn35JXsFK13CxNFMQrvLCg7Rf+i5XVhoFg9H/sevNoeirb7xUnNBVHkg9C+UmzbS7H5enH65eBevlX7HeiZcZ+gaFH5x/d8DXJMce57vgZBoaBQUCgoFBQKCgWFgkJBoaBQUCgoFBQKCgWFgkLxK5ZyS5HF9I4DtxSLQH/Rrc0tRd/3eE1yShHV+nBKUa59T9cohxRlP7QnKOy5o8jWcUnYKWqOGPxk2aKMap94zUJRTidfD2xyG9yDJPszU5TTAG/8u8xIkZyEkSI9CRNFghIGihQl6imSlKilSFOijiJRiRqKVCWqFMlKVCjSldilSFhihyJliY8USUt8oEhb4j1F4hLvKFKX+H/kf/ISvR4S6mbx+v6DDIlNfx+yRTkJ769cXlpGdsOCiIiIiIiIiIiIiIiIiIiILP0DwEuGZGFPIZEAAAAASUVORK5CYII="
        />
        <el-avatar
          :size="60"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtkhublJBXP4FNOJATbI69YecqWfhanaFkw&usqp=CAU"
        />
      </el-row>
      <el-row>
        <span style="margin-right: 18%; margin-left: 1.8%">Calender</span>
        <span style="margin-right: 20%">Chat</span>
        <span>Meet</span>
      </el-row>
    </el-dialog>

    <!-- chat dialogue -->
    <el-dialog
      v-model="chat"
      :show-close="false"
      style="
        margin-left: 4.8%;
        width: 20%;
        height: 80%;
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <el-row
        style="
          margin-top: -22.5%;
          background-color: rgb(241, 244, 244);
          height: 70px;
          margin-left: -7.5%;
          border-radius: 10px;
          margin-right: -7.7%;
        "
      >
        <el-icon
          size="30"
          style="margin-right: 5%; margin-left: 10%; margin-top: 8%"
          ><ChatSquare
        /></el-icon>
        <b style="margin-top: 9%; font-size: medium">New chat </b>
      </el-row>
    </el-dialog>

    <!-- Space Dialog -->
    <el-dialog
      v-model="space"
      :show-close="false"
      style="
        margin-left: 4.8%;
        width: 20%;
        height: 80%;
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <el-row
        style="
          margin-top: -22.5%;
          background-color: rgb(241, 244, 244);
          height: 70px;
          margin-left: -7.5%;
          border-radius: 10px;
          margin-right: -7.7%;
        "
      >
        <el-icon
          size="25"
          style="margin-right: 5%; margin-left: 10%; margin-top: 8%"
          ><Plus
        /></el-icon>
        <b style="margin-top: 9%; font-size: medium">New space </b>
      </el-row>
    </el-dialog>

    <!-- Meet Dialog -->
    <el-dialog
      v-model="meet"
      :show-close="false"
      style="
        margin-left: 4.8%;
        width: 20%;
        height: 80%;
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <el-row
        style="
          margin-top: -22.5%;
          background-color: rgb(241, 244, 244);
          height: 70px;
          margin-left: -7.5%;
          border-radius: 10px;
          margin-right: -7.7%;
        "
      >
        <el-icon
          size="25"
          style="margin-right: 5%; margin-left: 10%; margin-top: 8%"
          ><VideoCameraFilled
        /></el-icon>
        <b style="margin-top: 9%; font-size: medium">New meet </b>
      </el-row>
    </el-dialog>

    <!-- Profile dialog -->
    <el-dialog
      v-model="profile"
      :show-close="false"
      style="
        margin-left: 70%;
        margin-top: 4.5%;
        width: 30%;
        height: 45%;
        border-radius: 10px;
        background-color: rgb(241, 244, 244);
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <el-avatar
        class="icon"
        :size="50"
        style="margin-left: 3%; margin-top: -10%"
      >
        <el-icon size="25" style="margin-left: auto; margin-right: auto"
          ><UserFilled
        /></el-icon>
      </el-avatar>
      <el-row
        ><b style="font-size: medium; margin-top: -10%; margin-left: 20%">ABC</b
        ><br />
        <p style="margin-top: -5%; margin-left: -8%">abc@gmail.com</p>
      </el-row>
      <el-row>
        <el-button style="margin-left: 20%"
          >Manage your Google Account</el-button
        >
      </el-row>
      <hr />
      <el-row style="margin-top: 13%">
        <el-avatar
          class="icon"
          :size="40"
          style="margin-left: 3%; margin-top: -10%"
        >
          <el-icon size="25" style="margin-left: auto; margin-right: auto"
            ><UserFilled
          /></el-icon>
        </el-avatar>
        <el-row
          ><b style="font-size: medium; margin-top: -25%; margin-left: 35%"
            >ABC</b
          ><br />
          <p style="margin-top: -23%; margin-left: 35%">abc@gmail.com</p>
        </el-row></el-row
      >
      <el-row style="margin-left: 5%; margin-top: 1%">
        <el-icon size="25"><UserFilled /></el-icon>
        <el-icon size="10" style="margin-left: -1%"><Plus /></el-icon>
        <b style="font-size: 14px; margin-top: 2%; margin-left: 6%"
          >Add another account</b
        >
      </el-row>
      <el-row style="margin-left: 5.5%; margin-top: 5%">
        <el-icon size="22"><Remove /></el-icon>
        <b style="font-size: 14px; margin-top: 0.5%; margin-left: 8%"
          >Sign out of all accounts
        </b>
      </el-row>
      <hr />
      <el-row style="font-size: smaller">
        <span style="margin-left: 25%; margin-right: 15%">Privacy policy</span>
        <span>Terms of service</span>
      </el-row>
    </el-dialog>
  </el-container>
</template>

<script lang="ts" setup>
import {
  UserFilled,
  Search,
  Operation,
  Clock,
  StarFilled,
  Minus,
  TopRight,
  Paperclip,
  PictureFilled,
  Plus,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import { onMounted } from "vue";
const visible = ref(false);
const Starred = ref(false);
const isCollapse = ref(true);
const choose = ref(["All", "None", "Read", "Unread", "Starred", "Unstarred"]);
const value = ref("All");
const iconVisible = ref(false);
const chat = ref(false);
const profile = ref(false);
const meet = ref(false);
const space = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const tableData = [
  {
    select: false,
    star: true,
    by: "Naveen",
    sub: "Maths",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Keka",
    sub: "No Attendance Logged",
    msg: "You are receiving this email because we identified some irregularity in your attendance logs ",
    date: "Jan-1",
  },
  {
    select: true,
    star: true,
    by: "Keka",
    sub: "Leave Deduction for No Attendance",
    msg: "There has been a penalization of 1 of leave for . Please be cautious in future.",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Austin",
    sub: "Spreadsheet shared with you: 'A7S India-USA Timesheet W008- 2023'",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Slack",
    sub: "Slack",
    msg: "My Account|Contact us|Need support? [ You are currently subscribed as: varun@avowsolutions.com ]",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Naveen",
    sub: "Maths",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Keka",
    sub: "No Attendance Logged",
    msg: "You are receiving this email because we identified some irregularity in your attendance logs ",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Keka",
    sub: "Leave Deduction for No Attendance",
    msg: "There has been a penalization of 1 of leave for . Please be cautious in future.",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Austin",
    sub: "Spreadsheet shared with you: 'A7S India-USA Timesheet W008- 2023'",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Slack",
    sub: "Slack",
    msg: "My Account|Contact us|Need support? [ You are currently subscribed as: varun@avowsolutions.com ]",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Naveen",
    sub: "Maths",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Keka",
    sub: "No Attendance Logged",
    msg: "You are receiving this email because we identified some irregularity in your attendance logs ",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Keka",
    sub: "Leave Deduction for No Attendance",
    msg: "There has been a penalization of 1 of leave for . Please be cautious in future.",
    date: "Jan-1",
  },
  {
    select: true,
    star: false,
    by: "Austin",
    sub: "Spreadsheet shared with you: 'A7S India-USA Timesheet W008- 2023'",
    msg: "123",
    date: "Jan-1",
  },
  {
    select: false,
    star: true,
    by: "Slack",
    sub: "Slack",
    msg: "My Account|Contact us|Need support? [ You are currently subscribed as: varun@avowsolutions.com ]",
    date: "Jan-1",
  },
];
let count = ref(0);
const tableDataStar = ref([]);
const url =
  "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png";
// const modes = ref(["Active", "Do not disturb", "Set as away"]);
const collapse = () => {
  isCollapse.value = false;
};
const activeIndex = ref("1");
const str = () => {
  for (const e of tableData) {
    if (e.star == true && count.value == 0) {
      tableDataStar.value.push(e);
    }
  }
  +96;

  Starred.value = true;
  count.value = 1;
};
// onMounted(() => {
//   for (let e of tableData) {
//     if (e.star) {
//       tableDataStar.push(e);
//     }
//   }
//   console.log(tableDataStar);
// });
</script>

<style>
.menu1 {
  margin-left: 0%;
  margin-right: 0%;
  margin-top: -10%;
}
.icon {
  margin-left: -5%;
  margin-right: -5%;
}
.col {
  background-color: rgb(241, 244, 244);
}
.row {
  background-color: rgb(225, 236, 236);
  margin-right: -5%;
  margin-top: -2.75%;
  margin-left: -2.8%;
  align-items: center;
}
hr {
  opacity: 0.5;
  margin-right: -2%;
  margin-left: -2%;
  margin-top: 1.5%;
}
.icons {
  margin-left: 1.5%;
  margin-top: 1%;
  margin-bottom: 0%;
}
.expand {
  margin-top: 0%;
  border-radius: 50px;
  margin-left: -150%;
  margin-right: 0%;
}
.ava {
  margin-right: 10%;
  margin-bottom: 2%;
  margin-top: 3%;
}
.con {
  margin-top: 5%;
  margin-left: 0%;
}
</style>
