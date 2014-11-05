function FindProxyForURL(url,host)
{
    url = url.toLowerCase();
    if(
            shExpMatch(url, "*facebook.com*") ||
            shExpMatch(url, "*twitter.com*") ||
            shExpMatch(url, "*wordpress.com*") ||
            shExpMatch(url, "*appspot.com*") ||
            shExpMatch(url, "*youtube.com*") ||
            shExpMatch(url, "*gstatic.com*") ||
            shExpMatch(url, "*google*.com*")
      )
    {
        return "SOCKS5 162.243.244.197:9999; SOCKS 162.243.244.197:9999";
    }
    return "DIRECT";
}
