#!/bin/bash
PORT=8888
echo "Visit: http://localhost:$PORT"
cd public
python3 -m http.server $PORT