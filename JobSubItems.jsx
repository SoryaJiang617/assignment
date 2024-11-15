import ListItemText from "@mui/material/ListItemText";

export const JobSubItems = ({ subItems }) => {
  if (!subItems || !subItems.length) {
    return null;
  }

  return (
    <div>
      {subItems.map((item) => {
        return (
          <div>
            <p>
              <span>title:</span>
              <span>{item.title}</span>
            </p>
            <p>
              <span>description:</span>
              <span>{item.description}</span>
            </p>
            <p>
              <span>status:</span>
              <span>{item.status}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
