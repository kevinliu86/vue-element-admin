<template>
  <div class="outer">
    <h1>Work Example</h1>
    <p>(All data are mock data, no real data involved)</p>
    <div class="main-content">
      <h2>1. Dashboard Page Demo</h2>
      <img src="@/assets/workExample/dashboard.png" alt="Work Example Pic 1">
      <h2>2. The frontend table, can highlight data by condition</h2>
      <img src="@/assets/workExample/highlight.png" alt="Work Example Pic 2">
      <h2>3.Table with merged header and merged cells</h2>
      <img src="@/assets/workExample/mergedtable.png" alt="Work Example Pic 3">
      <img src="@/assets/workExample/mergedTableWithfilter.png" alt="Work Example Pic 3">
      <h2>
        4.Table with search function and content filter button Calculation form
        with print and export to excel function
      </h2>
      <img src="@/assets/workExample/calTable.png" alt="Work Example Pic 4">
      <!-- <img src="@/assets/workExample/caltable_2.png" alt="Work Example Pic 5"> -->

      <h2>5. Workflow System User can check their request status</h2>
      <img src="@/assets/workExample/statusCheck.png" alt="Work Example Pic 6">
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkExample',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
p {
    margin: 0;
}
img {
    width:70%;
}
h1 {
    margin-bottom:5px;
}
.outer {
    padding-left: 10px;
}
.main-content {
  display: flex;
  flex-direction: column;
}
</style>
