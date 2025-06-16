echo "Regular files: $(find . -maxdepth 1 -type f | wc -l)"
echo "Directories: $(find . -maxdepth 1 -type d | wc -l)"