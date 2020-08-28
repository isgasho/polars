(function() {var implementors = {};
implementors["polars"] = [{"text":"impl Send for Series","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for FillNoneStrategy","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for PrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for AlignedVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for LargeListPrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LargeListUtf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterSingleChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterSingleChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterManyChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterManyChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterCont&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterCont&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterCont&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumericChunkIterDispatch&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ChunkIterDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomChunked&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomCont&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomSingleChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8TakeRandom&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8TakeRandomSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BoolTakeRandom&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BoolTakeRandomSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListTakeRandom&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListTakeRandomSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomDispatch&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Utf8Type","synthetic":true,"types":[]},{"text":"impl Send for LargeListType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for PolarsError","synthetic":true,"types":[]},{"text":"impl Send for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RecordBatchIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GroupBy&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Send for CsvWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for CsvReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for IPCReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Send for IPCWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for ParquetReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()