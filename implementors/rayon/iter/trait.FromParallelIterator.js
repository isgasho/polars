(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; FromParallelIterator&lt;Option&lt;&lt;T as ArrowPrimitiveType&gt;::Native&gt;&gt; for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ArrowPrimitiveType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl FromParallelIterator&lt;bool&gt; for BooleanChunked","synthetic":false,"types":[]},{"text":"impl FromParallelIterator&lt;String&gt; for Utf8Chunked","synthetic":false,"types":[]},{"text":"impl FromParallelIterator&lt;Option&lt;String&gt;&gt; for Utf8Chunked","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromParallelIterator&lt;Option&lt;&amp;'a str&gt;&gt; for Utf8Chunked","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromParallelIterator&lt;&amp;'a str&gt; for Utf8Chunked","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()