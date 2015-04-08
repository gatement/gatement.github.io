function FindProxyForURL(url,host)
{
    url = url.toLowerCase();
    if(
            shExpMatch(url, "*golang.com*") ||
            shExpMatch(url, "*facebook.com*") ||
            shExpMatch(url, "*twimg.com*") ||
            shExpMatch(url, "*twitter.com*") ||
            shExpMatch(url, "*wordpress.com*") ||
            shExpMatch(url, "*appspot.com*") ||
            shExpMatch(url, "*youtube.com*") ||
            shExpMatch(url, "*gstatic.com*") ||
            shExpMatch(url, "*google*.com*")
      )
    {
        return "SOCKS5 127.0.0.1:9999; SOCKS 127.0.0.1:9999";
    }
    return "DIRECT";
}