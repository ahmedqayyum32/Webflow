<canvas id="the-canvas"></canvas>

<style>
    body, html {
      height: 100%;
      margin: 0;
    }

    #the-canvas {
    display: block;
      min-width: 100%;
     
    }
  </style>



    var url = '{{wf {&quot;path&quot;:&quot;file-ref:associated-file&quot;,&quot;type&quot;:&quot;FileRef&quot;\} }}';

    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.11.338/build/pdf.min.js';
    document.body.appendChild(scriptTag);

    scriptTag.onload = function() {
      var pdfjsLib = window['pdfjs-dist/build/pdf'];
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js';

      var loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');

        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');

          var wrapper = document.getElementById('wrapper');
          var wrapperWidth = wrapper.clientWidth;
          var wrapperHeight = wrapper.clientHeight;

          var pageWidth = page.view[2];
          var pageHeight = page.view[3];

          var scale = wrapperWidth / pageWidth;
          var viewport = page.getViewport({ scale: scale });

          var canvas = document.getElementById('the-canvas');
          if (!canvas || !canvas.getContext) {
            console.error('Canvas element not found or getContext is not supported.');
            return;
          }

          // Set the canvas size to fill the wrapper
          canvas.width = wrapperWidth;
          canvas.height = wrapperHeight;

          var context = canvas.getContext('2d');

          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');

            setTimeout(function() {
              var element = document.querySelector('.pdf_corner_img');
              element.style.setProperty('display', 'inline-block', 'important');
            }, 0);
          });
        });
      }, function (reason) {
        console.error('PDF loading error:', reason);
      });
    };
