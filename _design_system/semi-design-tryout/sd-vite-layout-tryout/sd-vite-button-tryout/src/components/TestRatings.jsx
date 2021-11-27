import { Rating } from '@douyinfe/semi-ui';
import { IconLikeHeart } from '@douyinfe/semi-icons';

export default () => {
  return (
    <>
      <div>
        <Rating
          style={{ color: 'red' }}
          character={<IconLikeHeart size="extra-large" />}
          defaultValue={3}
        />
        <br />
        <br />
        <Rating
          style={{ color: 'red' }}
          size={48}
          allowHalf
          character={<IconLikeHeart style={{ fontSize: 48 }} />}
          defaultValue={3}
        />
        <br />
        <br />
        <Rating character={'赞'} size={18} defaultValue={3} />
        <br />
        <br />
        <Rating count={10} defaultValue={6} />
      </div>
      <div>
        <Rating defaultValue={5} />
        <br />
        <br />
        <Rating size="small" defaultValue={5} />
      </div>
    </>
  );
};
