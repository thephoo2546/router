<template>
  <body>
    <div class="card-con">
      <div id="card1">
        <div class="card" style="width: 18rem;">
          <img src="/imgs_project/goodview.jpg" class="card-img-top" alt="กู๊ดวิว">
          <div class="card-body">
            <h5 class="card-title"><b>Goodview</b></h5>
            <p>ราคาโต๊ะละ : 250 บาท</p>
            
            <button type="button" class="btn btn-danger" @click="redirectToCardOutput(1)">
              จอง
            </button>
          </div>
        </div>
      </div>

      <div id="card2">
        <div class="card" style="width: 18rem;">
          <img src="/imgs_project/tawandang.jpg" class="card-img-top" alt="ตะวันแดง">
          <div class="card-body">
            <h5 class="card-title"><b>ตะวันแดง</b></h5>
            <p>ราคาโต๊ะละ : 300 บาท</p>
            
            <button type="button" class="btn btn-danger" @click="redirectToCardOutput(2)">
              จอง
            </button>
          </div>
        </div>
      </div>

      <div id="card3">
        <div class="card" style="width: 18rem;">
          <img src="/imgs_project/tachang.jpg" class="card-img-top" alt="ท่าช้าง">
          <div class="card-body">
            <h5 class="card-title"><b>ท่าช้าง</b></h5>
            <p>ราคาโต๊ะละ : 200 บาท</p>
            
            <button type="button" class="btn btn-danger" @click="redirectToCardOutput(3)">
              จอง
            </button>
          </div>
        </div>
      </div>

      <div id="card4">
        <div class="card" style="width: 18rem;">
          <img src="/imgs_project/warm_up.jpg" class="card-img-top" alt="วอร์มอัพ">
          <div class="card-body">
            <h5 class="card-title"><b>Warmup</b></h5>
            <p>ราคาโต๊ะละ : 200 บาท</p>
            
            <button type="button" class="btn btn-danger" @click="redirectToCardOutput(4)">
              จอง
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
export default {
  methods: {
    redirectToCardOutput(cardId) {
      // ใช้ Vue Router เพื่อเปิดไปยังหน้า OuterOutput.vue และส่งพารามิเตอร์ cardId
      this.$router.push({ name: 'CardOutput', params: { cardId } });
    },
  },
};
</script>

<style scoped>
.card {
  margin: 40px;
  margin-top: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px
}

.card-con {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
}

.card-con button {
  border-radius: 10px;
}

.card img {
  border-radius: 9px;
}

</style>
