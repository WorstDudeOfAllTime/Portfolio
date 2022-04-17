import ProjectBlock from "../../components/ProjectBlock";
let disc = "Here is some shit for you to read on";
export default function Portfolio() {
  return (
    <div>
      <ProjectBlock
        src={require("../../public/img/Me.jpg")}
        description={disc}
      />
      <ProjectBlock
        src={require("../../public/img/Me.jpg")}
        description={disc}
      />
    </div>
  );
}
