<template>
  <div class="search-div">
    <!-- 搜索表单 -->
    <el-form label-width="70px" size="small">
      <el-form-item label="角色名称">
        <el-input
          v-model="queryDto.roleName"
          style="width: 100%"
          placeholder="角色名称"
        ></el-input>
      </el-form-item>
      <el-row style="display:flex">
        <el-button type="primary" size="small" @click="searchSysRole">
          搜索
        </el-button>
        <el-button size="small" @click="resetData">重置</el-button>
      </el-row>
    </el-form>

    <!-- 添加按钮 -->
    <div class="tools-div">
      <el-button type="success" size="small">添加</el-button>
    </div>

    <!--- 角色表格数据 -->
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="客户名称" width="180" />
      <el-table-column prop="createdTime" label="创建时间" width="180" />
      <el-table-column prop="address" label="联系地址" width="180" />
      <el-table-column prop="remark" label="客户备注" width="180" />
      <el-table-column prop="contactName" label="联系人姓名" width="180" />
      <el-table-column prop="contactAddress" label="联系人地址" width="180"  />
      <el-table-column prop="contactPhone" label="联系人手机" width="180" />
      <el-table-column prop="contactRemark" label="联系人备注" width="180" />
      <el-table-column prop="remindFrequency" label="提醒频率" width="180"  />
      <el-table-column prop="remindTime" label="提醒时间" width="180" />
      <el-table-column prop="nextRemindTime" label="下次提醒" width="180" />
      <el-table-column prop="remindContent" label="提醒内容" width="180" />
      <el-table-column prop="productName" label="产品名称" width="180" />
      <el-table-column prop="salesTime" label="销售时间" width="180" />
      <el-table-column prop="contractExpirationDate" label="合同到期时间" width="180" />
      <el-table-column prop="unitPrice" label="单价" width="180" />
      <el-table-column prop="number" label="数量" width="180" />
      <el-table-column prop="contractRemark" label="合同备注" width="180" />
      <el-table-column label="操作" align="center" width="280">
        <el-button type="primary" size="small">
          修改
        </el-button>
        <el-button type="danger" size="small">
          删除
        </el-button>
      </el-table-column>
    </el-table>

    <!--分页条-->
    <el-pagination
      v-model:current-page="pageParams.page"
      v-model:page-size="pageParams.size"
      :page-sizes="[10, 20, 50, 100]"
      @size-change="fetchData"
      @current-change="fetchData"
      layout="total, sizes, prev, pager, next"
      :total="total"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCustomRemindPage } from "@/api/customRemind";

let list = ref([])  //角色列表
let total = ref(0)  //总记录数

//分页数据
const pageParamsForm = {
  page: 1, // 页码
  size: 10, // 每页记录数
}
const pageParams = ref(pageParamsForm)

// 页面加载完毕以后请求后端接口获取数据
onMounted(() => {
  fetchData() ;
})

// 搜索按钮点击事件处理函数
const searchSysRole = () => {
  //queryDto.value.roleName = ""
  fetchData() ;
}

// 远程调用后端分页查询接口
const fetchData = async () => {
  const {data , code , message } = await getCustomRemindPage(pageParams.value) ;
  list.value = data.data
  total.value = data.total
}
</script>

<style scoped>

.search-div {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ebeef5;
  border-radius: 3px;
  background-color: #fff;
}

.tools-div {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ebeef5;
  border-radius: 3px;
  background-color: #fff;
}

</style>