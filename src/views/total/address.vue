<template>
<div>

<div>
<el-row>
<el-col :span="22">
  <el-input placeholder="请输入内容" v-model="input5" >
    <el-button slot="append" icon="el-icon-search" @click="keysEdit"></el-button>
  </el-input>
  </el-col>
  <el-col :span="2">
  <el-button @click="dialogFormVisible = true"><i class="el-icon-edit"></i>添加</el-button>
  </el-col>
</el-row>
</div>
<div>
<el-dialog title="新增" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址类型" :label-width="formLabelWidth">    
    <el-select v-model="form.address_type" placeholder="请选择">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
    <el-form-item label="手机号" :label-width="formLabelWidth">
      <el-input v-model="form.mobile" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话号" :label-width="formLabelWidth">
      <el-input v-model="form.telephone" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="备注" :label-width="formLabelWidth">
      <el-input v-model="form.comment" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="onSubmit">确 定</el-button>
  </div>
</el-dialog>
</div>

<div>
<el-dialog title="编辑" :visible.sync="dialogForm1Visible">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form1.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form1.address" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址类型" :label-width="formLabelWidth">    
    <el-select v-model="form1.address_type" placeholder="请选择">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
    <el-form-item label="手机号" :label-width="formLabelWidth">
      <el-input v-model="form1.mobile" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话号" :label-width="formLabelWidth">
      <el-input v-model="form1.telephone" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="备注" :label-width="formLabelWidth">
      <el-input v-model="form1.comment" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="form1onSubmit">确 定</el-button>
  </div>
</el-dialog>
</div>

  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名" 
      sortable>
    </el-table-column>  
    <el-table-column
      prop="address"
      label="地址" 
      sortable>
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="手机" 
      sortable>
    </el-table-column> 
    <el-table-column
      prop="telephone"
      label="电话" 
      sortable>
    </el-table-column> 
    <el-table-column
      prop="address_type"
      label="地址类型" 
      sortable>
    </el-table-column>
    <el-table-column
      prop="comment"
      label="备注" 
      sortable>
    </el-table-column>
    <el-table-column
      prop="head_img"
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotal">
    </el-pagination>
  </div>
</div>
</template>

<script>
import { getAddress, addAddress, editAddress, delAddress, getAddress_type } from '@/api/address'

    export default{
        data() {
            return {
                url: '/api/v2.1/address',
                tableData: [],
                dialogFormVisible: false,
                dialogForm1Visible: false,
                currentPage: 1,
                pageSize: 10,
                keys:'',
                form: {
                  name: '',
                  address: '',
                  mobile: '',
                  address_type: '',
                  telephone: '',
                  comment:''
                },
                form1: {
                  name: '',
                  address: '',
                  mobile: '',
                  address_type: '',
                  telephone: '',
                  comment:''
                },
                options: [],
                formLabelWidth: '120px',
                pageTotal: 0
            }
        },
        created(){ 
            this.getData(this.currentPage, this.pageSize, this.keys);
            this.getType();
        },
        methods:{
            keysEdit(){
              this.keys= this.input5;
              this.getData(this.currentPage, this.pageSize, this.keys);
            },
            onSubmit() {
                console.log(this.form);
                addAddress(this.form).then((response) => {
                    // success callback
                    this.dialogFormVisible = false;
                    this.$message.success('提交成功！');
                    this.getData(this.currentPage,this.pageSize);
                    this.form.name = '';
                    this.form.address = '';
                    this.form.address_type = '';
                    this.form.mobile = '';
                    this.form.telephone = '';
                }, (response) => {
                    // error callback
                    this.$message.success('提交失败！');
                });
                
            },
            form1onSubmit() {
                //console.log(this.form1);
                editAddress(this.form1).then((response) => {
                    // success callback
                    this.dialogForm1Visible = false;
                    this.$message.success('提交成功！');
                    this.getData(this.currentPage,this.pageSize);
                }, (response) => {
                    // error callback
                    this.$message.success('提交失败！');
                });
                
            },
            getData(page, size, keys ){
              console.log(page)
              getAddress({'page':page,'size':size, 'keys':keys }).then((res) => {
                //console.log(res.data);
                this.tableData = res.data.list;
                this.pageTotal = res.data.total;
                this.currentPage = res.data.page;
                this.pageSize = res.data.size;

              },res=>{
                //console.log (this.url+'调用失败');      
              })
            },
            getType(){
              getAddress_type().then((res) => {
                console.log(res.data);
                this.options = res.data.list;
                console.log(this.options);
              },res=>{
                //console.log (this.url+'调用失败');      
              })
            },
            indexMethod(index) {
              return index+1;
            },
            handleEdit(index, row) {
              this.form1.name = row.name;
              this.form1.address = row.address;
              this.form1.address_type = row.address_type;
              this.form1.id = row.id;
              this.form1.mobile = row.mobile;
              this.form1.telephone = row.telephone;
              this.form1.comment = row.comment;
              this.dialogForm1Visible = true;
            },
            handleDelete(index, row, data) {
              //console.log(index, row);
              delAddress('/api/v2.1/address/del/'+row.id).then((res) => {
                this.$message.success(row.key+" 删除成功！");
                data.splice(index, 1);
              },res=>{
                this.$message.success(row.key+" 删除失败！");      
              })
            },
            handleSizeChange(val) {
              console.log(`每页 ${val} 条${this.currentPage}页`);
              this.$options.methods.getData.bind(this)(this.currentPage, val, this.keys );
            },
            handleCurrentChange(val) {
              //作用域 绑定 this
              console.log(this.pageSize);
              console.log(val);
              this.$options.methods.getData.bind(this)(val, this.pageSize, this.keys);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                    done();
                  })
                  .catch(_ => {});
              }
        }
    }


</script>