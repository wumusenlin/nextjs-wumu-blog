export default async function handler(req, res) {
  // const pro = new Promise((r)=>{
  //   setTimeout(() => {
  //     r(1)
  //   }, 200);
  // })
  // await pro()

  setTimeout(() => {
    res.status(200).json({ name: 'wumusenlin', age: 25 })
  }, 2000);
}