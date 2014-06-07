<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/site.css">
</head>
<body>
<h3>Erlang - Distribution</h3>
<pre>erl -name server@johnsonlau.net -setcookie cookievalue</pre>
<p>rpc:call(RemoteNode, Module, Method, [Params]).</p>
<p>nl(Mod). % loads the module Mod on all connected nodes.</p>
<p>net_adm:ping(Node).</p>
<p>disconnect_node(Node).</p>
<p>nodes(). % returns a list of all other nodes in the network to which we are connected.<br />
nodes(Arg).</p>
</body>
</html>
