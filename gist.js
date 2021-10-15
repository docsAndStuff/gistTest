document.write(`<pre><code>

import sphinx
from .convert_html import html2Docutils

from docutils import nodes
from os.path import isdir, isfile, join, basename, dirname
from os import makedirs
from shutil import copyfile

</code></pre>`);