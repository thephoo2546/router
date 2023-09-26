<template>
  <div class="center-content">
    
    <div v-if="selectedCard === 1">
      <div class="card" style="width: 18rem;">
        <img src="/imgs_project/goodview.jpg" class="card-img-top" alt="กู๊ดวิว">
        <div class="card-body">
          <h3><b>ร้านที่ 1</b></h3>
          <h5 class="card-title">Goodview</h5>
          <p>ราคาโต๊ะละ : 250 บาท</p>
          <button type="button" class="btn btn-danger" @click="goBackToHomecard">กลับ</button>
        </div>
      </div>
    </div>
    
    <div v-else-if="selectedCard === 2">
      <div class="card" style="width: 18rem;">
        <img src="/imgs_project/tawandang.jpg" class="card-img-top" alt="ตะวันแดง">
        <div class="card-body">
          <h3><b>ร้านที่ 2</b></h3>
          <h5 class="card-title">ตะวันแดง</h5>
          <p>ราคาโต๊ะละ : 300 บาท</p>
          <button type="button" class="btn btn-danger" @click="goBackToHomecard">กลับ</button>
        </div>
      </div>
    </div>

    <div v-else-if="selectedCard === 3">
      <div class="card" style="width: 18rem;">
        <img src="/imgs_project/tachang.jpg" class="card-img-top" alt="ท่าช้าง">
        <div class="card-body">
          <h3><b>ร้านที่ 3</b></h3>
          <h5 class="card-title">ท่าช้าง</h5>
          <p>ราคาโต๊ะละ : 200 บาท</p>
          <button type="button" class="btn btn-danger" @click="goBackToHomecard">กลับ</button>
        </div>
      </div>
    </div>

    <div v-else-if="selectedCard === 4">
      <div class="card" style="width: 18rem;">
        <img src="/imgs_project/warm_up.jpg" class="card-img-top" alt="วอร์มอัพ">
        <div class="card-body">
          <h3><b>ร้านที่ 4</b></h3>
          <h5 class="card-title">Warmup</h5>
          <p>ราคาโต๊ะละ : 200 บาท</p>
          <button type="button" class="btn btn-danger" @click="goBackToHomecard">กลับ</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCard: null, 
    };
  },
  created() {
    const cardId = this.$route.params.cardId;
    if (cardId) {
      this.selectedCard = parseInt(cardId);
    }
  },
  methods: {
    goBackToHomecard() {
      
      this.$router.push({ name: 'home' });
    },
    
  },
};
</script>

<style scoped>
.card {
  margin: 50px;
  margin-top: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  
  padding: 20px
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 50vh; 
}
</style>