<template>
  <div class="footer">
    <el-button :type="type" icon="el-icon-check" circle></el-button>
    <el-button :type="typeLevelWater" :class="iconWaterLevel" round></el-button>
    <span class="footer-indicator">{{waterTerm}}℃</span>
    <el-button :type="closeDoor" round>{{isCloseDoor ? 'close' : 'open'}}</el-button>
    <el-button :type="typePedal" :class="iconPedal" round></el-button>
    <span class="footer-indicator">Laser: {{laserInfo.dataL}}</span>
    <span class="footer-indicator">Nozzle: {{laserInfo.dataN}}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    status() {
      return this.$store.getters.getSocketStatus;
    },
    online() {
      return this.$store.getters.isOnline;
    },
    type() {
      return this.online ? "success" : "info";
    },
    closeDoor() {
      return this.isCloseDoor ? "success" : "danger";
    },
    typeLevelWater() {
      return this.waterLevel > 40 ? "success" : "danger";
    },
    typePedal() {
      return this.isDownPedal ? "warning" : "";
    },
    iconWater() {
      return this.online ? "success" : "el-icon-close";
    },
    laserData() {
      return this.$store.getters.getSocketData;
    },
    /**
     * Уровень охлаждающей жидкости (ОЖ)
     */
    waterLevel() {
      return this.laserData[65];
    },
    iconWaterLevel() {
      return this.waterLevel < 96 ? "water-level-low" : "water-level-full";
    },
    /**
     * Температура ОЖ
     */
    waterTerm() {
      return this.laserData[705];
    },
    /**
     * Cтатус нажатия педали
     */
    isDownPedal() {
      return this.laserData[17];
    },
    iconPedal() {
      return this.isDownPedal ? "el-icon-pedal-down" : "el-icon-pedal-up";
    },
    /**
     * Температура ОЖ
     */
    laserInfo() {
      return {
        attach: this.laserData[67],
        dataL: this.laserData[706],
        dataN: this.laserData[707]
      };
    },
    /**
     * Температура ОЖ
     */
    laserNozzle() {
      return this.laserData[800];
    },
    /**
     * Статус открытия двери
     */
    isCloseDoor() {
      return this.laserData[66];
    }
  }
};
</script>

<style>
.el-icon-waterval::before {
  content: "\7e";
}
.el-icon-pedal-up::before {
  content: "\2220";
}
.el-icon-pedal-down::before {
  content: "\2014";
}
.water-level-low::before {
  content: "\21D3";
}
.water-level-full::before {
  content: "\21D1";
}
.icon-door::before {
  content: "\F6AA";
}
.footer-indicator {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
