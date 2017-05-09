const
  Print = require("../print"),
  url = require("url"),
  querystring = require("querystring")

let urlStr = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash"


/*
  href: 原始地址
  protocol: 请求协议
  slashes: 协议:后是否有"/"
  host: URL主机名 包括端口信息 host,com:8080 小写
  auth: URL认证信息 user:pass
  hostname: 主机名 小写 host.com
  port: 端口号 8080
  pathname: URL中的路径 /p/a/t/h
  search: ?query=string
  path: /p/a/t/h?query=string
  query: query=string
  hash: #hash
 */

//parse(urlString)
let result = url.parse(urlStr)
Print.print(result)
Print.print(url.parse("http://www.baidu.com:8080"))
// Print.print(url.constructor.prototype.parse.apply(url,[urlStr]))

//format()
let urlObj = {
  protocol: "http",
  slashes: true,
  auth: "deval",
  host: "www.baidu.com",
  port: "9090",
  hostname: "www.baidu.com:9090",
  hash: "#index",
  search: "?query=string",
  query: "query=string",
  pathname: "/p/a"
}
Print.print(url.format(urlObj))

//url.resolve(url,path)
Print.print(url.resolve("http://www.baidu.com/", "four"))
Print.print(url.resolve("http://www.baidu.com/","/one/two"))
Print.print(url.resolve("http://www.baidu.com/one", "two"))

//querystring.stringify(json[,])  json->string
let json = {
  foo: "bar",
  baz: ["uxx","uzz"],
  jah: null
}
Print.print(querystring.stringify(json))  //foo=bar&baz=uxx&baz=uzz&jah=
Print.print(querystring.stringify(json,";","="))
Print.print(querystring.parse("foo=bar;baz=uxx;baz=uzz;jah=",";","="))
