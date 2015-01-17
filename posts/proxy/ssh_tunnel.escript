% escript ssh_tunnel.escript

main(_) ->
    Cmd = "ssh -vCND 127.0.0.1:9999 root@domain.com -p 22",
    do(Cmd).

do(Cmd) ->
    io:format("======== start ========~n", []),
    os:cmd(Cmd),
    timer:sleep(10000),
    do(Cmd).
