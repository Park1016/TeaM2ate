const useFilterSearch = (props) => {
  const onSeachType = (type, item) => {
    for (let i = 0; i < type.length; i++) {
      if (Object.keys(type[i]).includes(item)) {
        return true;
      }
    }
  };

  const onSearch = (data, item, setSearch) => {
    const title = data.filter((x) => x.title.includes(item));
    const tag = data.filter((x) => x.tag.includes(item));
    const type = data.filter((x) => onSeachType(x.type, item));

    const arr = title.concat(tag.concat(type));
    setSearch(arr);
  };

  return [onSearch];
};

export default useFilterSearch;
