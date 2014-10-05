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
        return "SOCKS 127.0.0.1:8090";
    }
    return "DIRECT";
}
