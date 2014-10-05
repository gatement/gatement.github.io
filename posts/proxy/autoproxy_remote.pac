function FindProxyForURL(url,host)
{
    url = url.toLowerCase();
    if(
            shExpMatch(url, "*facebook.com*") ||
            shExpMatch(url, "*twitter.com*") ||
            shExpMatch(url, "*wordpress.com*") ||
            shExpMatch(url, "*appspot.com*") ||
            shExpMatch(url, "*youtube.com*") ||
            shExpMatch(url, "*googlecode.com*") ||
            shExpMatch(url, "*.google.com*")
      )
    {
        return "SOCKS5 162.243.244.197:8090; SOCKS 162.243.244.197:8090";
    }
    return "DIRECT";
}
