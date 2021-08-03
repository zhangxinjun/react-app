export default function filterRouterItem (router, r) {
  let a = null
  for (let index = 0; index < router.length; index++) {
    let el = router[index]
    if (el.path === r) {
      a = el
      console.log('a11111', a);

      return
    } else {
      console.log('1111111111111111111111111');

      if (el.children && el.children.length > 0) {
        filterRouterItem(el.children, r)
      }
    }
  }


  return a
}