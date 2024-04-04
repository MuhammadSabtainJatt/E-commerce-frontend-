import React from 'react'

export default function bottomFooter() {
    const year = new Date().getFullYear()
    return (
        <div className="container  px-3 " style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center" ,backgroundColor:"black"}}>
            <div className="row   text-light fw-bold text-center pb-0">
                <div className="col">
                    <p className='mb-0' style={{fontFamily: "sans-serif"}}>Copyright &copy; {year} Ali Brothers | Made by Muhammad Sabtain  </p>
                </div>
            </div>
        </div>

    )
}
