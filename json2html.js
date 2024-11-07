// json2html.js
export default function json2html(data) {
    // Determine all unique headers by combining keys from all objects
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table string
    let html = `<table data-user="pranavbhandari798@gmail.com">`;
    
    // Add the header row
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
  
    // Add each row in the table body
    html += `<tbody>`;
    for (const row of data) {
      html += `<tr>${headers.map(header => `<td>${row[header] ?? ''}</td>`).join('')}</tr>`;
    }
    html += `</tbody></table>`;
  
    return html;
  }
 