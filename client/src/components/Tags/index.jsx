import { Plus } from "@components/Icons";
import {
  AddButton,
  AddTagContainer,
  Container,
  DeleteButton,
  Input,
  TagItem,
  TagsList,
} from "./styles";

function List({ children, ...props }) {
  return <TagsList {...props}>{children}</TagsList>;
}

function ListItem({ tag, onDeleteTag, children, ...props }) {
  return (
    <TagItem {...props}>
      <DeleteButton type="button" onClick={() => onDeleteTag(tag)}>
        <span>{children}</span>
        <Plus />
      </DeleteButton>
    </TagItem>
  );
}

function NewTag({ onAddTag, children, ...props }) {
  return (
    <AddTagContainer {...props}>
      {children}
      <AddButton type="button" onClick={onAddTag}>
        <Plus />
      </AddButton>
    </AddTagContainer>
  );
}

function NewTagInput({ ...props }) {
  return <Input {...props} />;
}

function Tags({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Tags.List = List;
Tags.Item = ListItem;
Tags.AddTag = NewTag;
Tags.Input = NewTagInput;

export default Tags;
