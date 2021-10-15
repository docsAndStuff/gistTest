document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-638d44157c00b28e9b08e3df254191c4.css">')
document.write('<div id=\"gist112410176\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-test-py\" class=\"file my-2\">\n    \n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python  \">\n\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-test-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-test-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>whereis<\/span>(<span class=pl-s1>binary<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-test-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>command<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&#39;which&#39;<\/span> <span class=pl-k>if<\/span> <span class=pl-s1>os<\/span>.<span class=pl-s1>name<\/span> <span class=pl-c1>!=<\/span> <span class=pl-s>&#39;nt&#39;<\/span> <span class=pl-k>else<\/span> <span class=pl-s>&#39;where&#39;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-test-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>try<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-test-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>sub<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>subprocess<\/span>.<span class=pl-en>run<\/span>([<span class=pl-s1>command<\/span>, <span class=pl-s1>binary<\/span>], <span class=pl-s1>text<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>, <span class=pl-s1>capture_output<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-test-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>return<\/span> <span class=pl-s1>sub<\/span>.<span class=pl-s1>stdout<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-test-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>except<\/span> <span class=pl-v>BaseException<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>e<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-test-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-en>print<\/span>(<span class=pl-s>f&quot;Warning: <span class=pl-s1><span class=pl-kos>{<\/span><span class=pl-s1>binary<\/span><span class=pl-kos>}<\/span><\/span> is not found&quot;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-test-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-test-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>return<\/span> <span class=pl-s>&#39;&#39;<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/intelkevinputnam/5092affd0a9555709862ba4c4473d47f/raw/2d44a0c92c3f8737f1e3bb3f985e3e7265870c2f/test.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/intelkevinputnam/5092affd0a9555709862ba4c4473d47f#file-test-py\">test.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')