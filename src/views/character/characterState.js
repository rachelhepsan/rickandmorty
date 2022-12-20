import { reactive } from "vue";

export default reactive({
  results: [],
  totalPages: 0,
  currentPage: 1,
  searchKey:'',
  loading: false
});
