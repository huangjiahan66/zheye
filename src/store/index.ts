import { createStore, storeKey } from 'vuex'
import { testData,testPosts,ColumnProps,PostProps} from '../testData'
export { ColumnProps, PostProps } from '../testData'

interface UserProps{
  isLogin:boolean,
  name?:string,
  id?:number,
  columnId?: number;
}
export interface GlobalDataProps{
  columns:ColumnProps[];
  posts:PostProps[];
  user:UserProps
}
export default createStore<GlobalDataProps>({
  state: {
    columns:testData,
    posts:testPosts,
    user: { isLogin: true, name: 'viking', columnId: 1 }
  },
  getters: {
    biggerColumnsLen(state){
      return state.columns.filter(c=>c.id>2).length
    },
    getColumnById:(state)=>(id:number)=>{
      return state.columns.find(c=>c.id==id)
    },
    getPostByCId:(state)=>(cid:number)=>{
      return state.posts.filter(post=>post.columnId==cid)
    }
  },
  mutations: {
    login(state){
      state.user={...state.user,isLogin:true,name:'黄嘉涵'}
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  actions: {
  },
  modules: {
  }

})
