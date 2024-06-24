<template>
  <div class="h-5/6">
    <div class="flex h-full">
      <div class="flex justify-center items-center">
         <div class="w-1/3 w-full h-full">
          <div class="card m-10 h-2/3 bg-accent text-primary-content">
            <div class="card-body">
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Time</h2>
                </div>
                <select class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose time</option>
                  <option>5 min</option>
                  <option>10 min</option>
                  <option>15 min</option>
                  <option>20 min</option>
                  <option>25 min</option>
                  <option>30 min</option>
                </select>
              </div>
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Difficulty</h2>
                </div>
                <select class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose difficulty</option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </select>
              </div>
              
              <div class="flex items-center justify-center">
                <h2 class="font-bold text-2xl pr-4 pt-16">Class Topic</h2>
              </div>
              <textarea class="textarea text-info text-lg h-full textarea-bordered resize-none" placeholder="Enter" style="resize: none;"></textarea>
              <div class="flex items-center justify-center">
                <button class="btn btn-primary w-1/3 text-base-100">Buy Now</button>
              </div>
            </div>
          </div>
         </div>
      </div>
      <div class="w-3/4 overflow-y-scroll border-l-2 h-full bg-base-100  pt-0 p-10 border-gray-300">
        <div class="card w-full mt-10 bg-base-100 hover:bg-neutral shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Tony Dillards</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 bg-success rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Ray Allen</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Michael Scott</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Michael Jackson</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Dwight Schrute</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Dwayne Johnson</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card w-full mt-10 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Jim Halpert</h2>
                  <div class="flex items-center justify-center">
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">M</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">W</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">T</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">F</h2>
                    <h2 class="border-2 border-gray-300 rounded-full pl-3 ml-3 font-bold text-2xl pr-4">S</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>