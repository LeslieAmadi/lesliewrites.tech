<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>RSS Feed | Leslie Writes</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 2rem; 
            background: #faf7fb;
            color: #333;
          }
          h1 { color: #d8a7c9; }
          .post { margin-bottom: 1.5rem; padding: 1rem; border-bottom: 1px solid #ddd; }
          .post a { color: #9c6baf; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>Leslie Writes – RSS Feed</h1>
        <xsl:for-each select="rss/channel/item">
          <div class="post">
            <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
            <p><xsl:value-of select="description"/></p>
            <small><em><xsl:value-of select="pubDate"/></em></small>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
