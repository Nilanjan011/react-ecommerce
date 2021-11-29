import myInitObject from './auth'

myInitObject.someProp="smaigikbnuibiuijhgbuiy"

export default function About() {
    
    var a=1;
    return (
        <>
            <div>
                {a==2 &&
                    <div>bu isdhfboiwshpfgwj</div>
                }
            </div>
            <h1>ABOUT PAGE{myInitObject.someProp}</h1>
        </>
    )
}