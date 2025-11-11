<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Leslie Writes Blog Feed</title>
        <meta charset="UTF-8"/>
        <style>
          body {
            font-family: 'Inter', sans-serif;
            background: #F0E2D2;
            color: #364042;
            margin: 2rem;
          }
          h1 {
            color: #D18266;
            border-bottom: 2px solid #D18266;
            padding-bottom: 0.3rem;
          }
          .post {
            background: #FFFFFF;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            padding: 1.5rem;
            margin: 1rem 0;
          }
          .post a {
            color: #5B6D92;
            text-decoration: none;
            font-weight: bold;
          }
          .post a:hover {
            text-decoration: underline;
          }
          .description {
            margin-top: 0.5rem;
            color: #555;
          }
          .date {
            font-size: 0.85rem;
            color: #888;
          }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p><xsl:value-of select="/rss/channel/description"/></p>
        <xsl:for-each select="/rss/channel/item">
          <div class="post">
            <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
            <p class="description"><xsl:value-of select="description"/></p>
            <p class="date"><xsl:value-of select="pubDate"/></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
