% erlsrv add ssh_tunnel -workdir "C:\dev\bin\ssh_tunnel" -comment "ssh tunnel proxy." -args "-s ssh_tunnel_srv"
-module(ssh_tunnel_srv).
-export([start/0]).

-define(CMD, "ssh -vCND 127.0.0.1:9999 root@domain.com -p 22").

start() ->
    do().

do() ->
    io:format("======== start ========~n", []),
    os:cmd(?CMD),
    timer:sleep(10000),
    do().
