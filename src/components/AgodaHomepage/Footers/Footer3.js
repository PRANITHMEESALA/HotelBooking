import React from 'react'
import './Footer3.css'
export default function Footer3() {
    return (
        <div style={{height:'200px',backgroundColor:'black'}}>
            <div>
                <span>  All material herein © 2005–2021 Agoda Company Pte. Ltd. All Rights Reserved.</span> <br/>
                <span>  Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.</span>
            </div> <br/><br/> <br/>
            <div className="d-flex flex-row justify-content-around">
                <img src="https://cdn6.agoda.net/images/MVC/default/agoda-logo-v2.png" alt="agodo" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABUCAMAAAC4PVVRAAAAY1BMVEX///8Amt4Alt0Ak9wAmN0AkNsdnd/g8Pq52/Po9PuIwepaseXO5PZUruRxuujV6fj4/P5EpuHv+P0Ajdugz++s1PA0oeDG5PbB3/RptOaNxeuWyOx/v+lgr+WZ0O+y2/MAhNixwEMWAAAEP0lEQVRoge2XiY7iOBCGfZTt3D7ICWF73v8pt8pOgG4YaKSd1qzkX2o1hLLrS11OGMvKysrKysrKysrKysrKysr6q+XcS4t5nouSPoU/j7Or17p/YVIKKQ8FUtXamx+BYsxKAPXCWamBS+TqJIj6Z7BYIXn0+Uw7lwcO48us/zcqhQBZfo/rpEB1P4OFiVwW+8Jk52L9+fgnwlVa86WhPn8N1tpL6EwzN+YL12drY6916ew0Ny/C/gBo9L4qz1yAXuJenfdj73rvmcWfdNzQLhr7TtcxeoUHKSX44parQlvMIy3xtkJr8HNy0I+4VPLzq8h/kVEAngNg3QrR4IVWALSjBM0sfjoQ14CFxjkaqdR5yVyuN1ydiP3Y4G6Ai8laElioozl+FcObXLiGSz5KWovJa2kT3Iu4OFfINZMfiSGAMbAj2gntNf4m+xsuXBG5iEhIQf9a3H7BT2L0XCDn9C4Xl2sIM+2wJi7cRPidy6FrLvrSLIeJmWgVWDiiJygfcQHvp4puDudGoWipYyXywfh2vOjOWE8uE5dYpjLsXHGMxbmPHVeJzZomFl59wCUpYSva6cDOEO+VxZv7ZsBKt3PFSmAO/StLXOCjwcZFLvk+A0ZyZLA5DV0+P+IS1D4fkrgC3eNgyRy3FcfvYM3/HHeuQ5oJVGcfkau75UIUWPZ7oZxSO0qZMvUoj8Q1R65YJOJi3l5jkjyW5jI/ynK7XHQfdue6xAJzcMeFnmHdVptYfGIXhOdck7w1l3uBDV7rDmuzxg5qEeLkl4rr8+S5PrGpuMbLPYuXvlxIXLBUUUf8+wYXdBfzLY+DEn6UxuHMbLXAtFc4hjROoRHnkmFpIhOXsl/q6xNXPJI3rqAh1TUFfU/s8zxKe2Me/YDoWBjYSaJlqfELcoUgcP0sZbNHgCq1irdBGO6e60j/YmeY9NyQysTpsXAvuALf+xH9tFs7WiUi6llQ1eLuyIWNNooTC4dLz6b5NRFFqu87LkvJ4I1zs3asp6FBJ3RZC3qCeM6FxwA1JLnBHKn0kDmpaIEHC7npBexc/R0Xl21NRw0l9I4rbg7Ce4nzKg5ZOS5nmuDavOIy8ajwS4sniPCOmbVhpSJSh9uOMWr+9/ESEI8wdWKJa/nE5bzczibVsCZakr0Ae3s+7lyQuFTkwqGczNGHD8yNUmDBCj70C52ldbFKPHN/xyVOI40YPaTwgty46DmaytVVeDziqcdPmEDb4jACPKji40eJeNtpLonrABDnaqFAEBebEQWvSVhxbeIyo1QHaTCF6qCo/FaFkdMYlfDrcMuFPdsMQ5OmRRzmqbJpUKeLZbF2a7G1lD0tddfbq02g57e4KuxLwnWX6VjX3ZDWmor6zRXHnn40wzFuY2a8Os2G3q7CLdebz0Y/ocz1nswBX0z/Qi5X4Iv8D77DZ2VlZWVlZWVlZWVlZWVlZf0/9C+9Qzl9wyVWGAAAAABJRU5ErkJggg==" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAZlBMVEX/////aQ//bxn/bBT/j03/iUP/gDT/eSn/iED/fS//hTz/8Oj/x6b/za//kU//ch7/7OH/+vf/nGD/6Nv/lVb/v5n/t43/u5P/49P/tIj/p3P/o2z/17//n2X/gzj/8en/yqr/2sQlwvvsAAABgElEQVRoge2U226CQBRF91wQEBUoClpbL///kx3KwHA0oE2axjR7+XbmzF5zQ4AQQgghhBBCCCGEEEJeGnWHhnmqZqCfqikK/0KordUqtfYm3PrKUFtut0YZaxcy3G42UmjavNhaMyVcAKmqsJZC64atEG6Ad3X01UG4DH2+FgNLtcfH5A5b4RHlQgp3bngnj3SNLC/8wgZhHfpGws9WOiM8nW/DVQb3k7W0xB5lKoVV6AvCqMBKzQl3KHMZHgFvbqJcxMFNqUV4e6JDXxC6vHhWeB4W1Ic32LtNNlKoC2RaCmtUqvDHE4SZP/hJYTOsqA8vcHDXWEihWg1BvbByW+77grB5tMNTdnOHiW+IHghP474gTApcZoXulUK80hplVVVld6YzwsO4b/RK3b0ms8Lhu/Hh1feO191ZzQi7vkvXN/4Or7hOCk0UGRVH4kUmSftq43ZkLEyjVAp9X5KYUHN5up/6Gv+l/1qo78iR/2pNgxBCCCGEEEIIIYQQQn7AF355EmZMOHKHAAAAAElFTkSuQmCC" alt=""/>
                <img src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg" alt=""/>
                <img src="https://cf.bstatic.com/static/img/bcom_logo_blue_bg/f12f834e849b2a7f752a14b2598a6ddfeda1e713.svg" alt=""/>
                
            </div>
        </div>
    )
}
