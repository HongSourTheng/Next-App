interface Props {
  params: { id: number; photoID: number };
}

const UserPhotoDetailPage = ({ params: { id, photoID } }: Props) => {
  console.log({ id });
  return (
    <div>
      UserPhotoDetailPage {id} and {photoID}
    </div>
  );
};

export default UserPhotoDetailPage;
