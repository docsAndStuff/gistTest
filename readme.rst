Do it yourself "gists"
#######################

We needed a way to keep code included with documentation up to date and facilitate testing in the spirit of CI/CD.

This method depends on `highlight.js <https://highlightjs.org/>`__ for code highlighting on the fly.

The js code looks for HTML with a remote class and source attribute:

.. code-block:: html

   <pre><code class="remote" source="https://raw.githubusercontent.com/docsAndStuff/gistTest/main/snippet.py"></code></pre>