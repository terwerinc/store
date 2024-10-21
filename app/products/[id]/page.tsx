import {redirect} from 'next/navigation';

interface Props {
    params: { id: string }; // 路由参数
}

const UserDetailPage = ({params: {id}}: Props) => {
    // 跳转到商品页面
    if (id === 'share-pro') {
        redirect('https://mall.terwergreen.com/product/Yw3nA95RUMJxsDSH'); // 跳转到 example.com
    } else {
        redirect('/'); // 跳转到首页
    }

    return null; // 不会渲染任何内容，因为已经跳转
};

export default UserDetailPage;
