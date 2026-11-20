import Jfile from './data.json'
 
export default function Test() {
  let arr = Jfile.map((item) => {
    return (
      <>
        <div>{item.img }</div>
        <div>{item.type }</div>
		 <div>{item.name }</div>
        <div  style={{ backgroundImage: `url('${item.img}')` , width:'500px',height:'500px'  }}></div>
        <br></br>
        <br></br>
      </>
      ) 
 } )
  return (
    <>
       
      <div>{arr }</div>

     
       
    </>
  );
}
