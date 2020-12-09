<template>
    <Row>
        <i-col span="3">
            <Menu theme="dark" :active-name="$route.name" :open-names="['content']" @on-select="topage1" ref="menu" style="height: calc(100ch)" width="auto">
                <Submenu name="content">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="content-article">文章管理</MenuItem>
                    <MenuItem name="comment">评论管理</MenuItem>
                    <MenuItem name="report">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="21">
            <router-view></router-view>
        </i-col>
    </Row>
</template>

<script>
import api from '../api/container/container-plan';

export default {
    name: 'Main',
    data () {
        return {
            activateName: 'article',
            body: {
                filterList: [
                    {
                        filterKey: '',
                        filterValue: ''
                    }
                ],
                pageNum: 1,
                pageSize: 10,
                sortList: [],
                searchKey: ''
            },
        }
    },
    methods: {
        topage1(name) {
            this.$router.push({
                name: name
            });
        },
        change1() {
            console.log(this.$route)
        },
        apiGetData() {
            api.getTableData(this.body).then(({data}) => {
                if (data.returnCode === 200) {
                    this.planTableData = data.returnData.pageInfo.list;
                    this.pageTotal = data.returnData.pageInfo.total;
                    this.tableData.loading = false;
                    this.selected = [];
                } else {
                    this.notifyInfo('获取数据异常,请重试！');
                }
            });
        },
    },
    updated() {
        this.$nextTick(() => {
            if (this.$refs.menu) {
                this.$refs.menu.updateOpened();
            }
        });
    },
    created() {
    }
}
</script>
